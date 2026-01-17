/**
 * 音声ファイルの長さを計測し、スクリプトのdurationを更新するスクリプト
 * 
 * 使い方:
 * npx ts-node scripts/sync-audio-duration.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// 音声ディレクトリ
const AUDIO_DIR = path.join(__dirname, '../public/audio');
const SCRIPT_PATH = path.join(__dirname, '../src/data/sample-script.ts');

/**
 * WAVファイルの長さを取得（秒）
 */
function getAudioDuration(filepath: string): number {
  try {
    // ffprobeを使用して音声の長さを取得
    const result = execSync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filepath}"`,
      { encoding: 'utf-8' }
    );
    return parseFloat(result.trim());
  } catch (error) {
    console.error(`ffprobeエラー: ${filepath}`);
    // WAVファイルのヘッダーから直接計算する代替方法
    return getWavDuration(filepath);
  }
}

/**
 * WAVファイルのヘッダーから長さを計算
 */
function getWavDuration(filepath: string): number {
  const buffer = fs.readFileSync(filepath);

  // WAVヘッダー解析
  // バイトレート: bytes 28-31
  const byteRate = buffer.readUInt32LE(28);
  // データサイズ: ファイルサイズ - 44 (ヘッダーサイズ)
  const dataSize = buffer.length - 44;

  return dataSize / byteRate;
}

/**
 * すべての音声ファイルの長さを取得
 */
function getAllAudioDurations(): Map<number, number> {
  const durations = new Map<number, number>();

  if (!fs.existsSync(AUDIO_DIR)) {
    console.error('❌ 音声ディレクトリが見つかりません:', AUDIO_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(AUDIO_DIR)
    .filter(f => f.endsWith('.wav'))
    .sort();

  for (const file of files) {
    const match = file.match(/scene_(\d+)\.wav/);
    if (match) {
      const sceneNum = parseInt(match[1], 10);
      const duration = getAudioDuration(path.join(AUDIO_DIR, file));
      durations.set(sceneNum, duration);
      console.log(`📊 scene_${String(sceneNum).padStart(3, '0')}.wav: ${duration.toFixed(2)}秒`);
    }
  }

  return durations;
}

/**
 * スクリプトファイルのdurationを更新
 */
function updateScriptDurations(durations: Map<number, number>) {
  let scriptContent = fs.readFileSync(SCRIPT_PATH, 'utf-8');

  // 各シーンのdurationInSecondsを更新
  let sceneCounter = 1;

  // 正規表現でdurationInSecondsを検索して置換
  scriptContent = scriptContent.replace(
    /durationInSeconds:\s*[\d.]+/g,
    (match) => {
      const duration = durations.get(sceneCounter);
      if (duration) {
        // 音声の長さ + 0.5秒のバッファ
        const newDuration = Math.ceil((duration + 0.5) * 10) / 10;
        sceneCounter++;
        return `durationInSeconds: ${newDuration}`;
      }
      sceneCounter++;
      return match;
    }
  );

  fs.writeFileSync(SCRIPT_PATH, scriptContent);
  console.log(`\n✅ ${SCRIPT_PATH} を更新しました`);
}

/**
 * メイン処理
 */
async function main() {
  console.log('🎵 音声同期スクリプトを開始します...\n');

  // 音声ファイルの長さを取得
  const durations = getAllAudioDurations();

  if (durations.size === 0) {
    console.error('❌ 音声ファイルが見つかりません。先に npm run generate-audio を実行してください。');
    process.exit(1);
  }

  console.log(`\n📝 ${durations.size}件の音声ファイルを検出\n`);

  // スクリプトを更新
  updateScriptDurations(durations);

  console.log('\n🎉 音声同期が完了しました！');
  console.log('   Remotion Studioをリロードして確認してください。');
}

main().catch(console.error);
