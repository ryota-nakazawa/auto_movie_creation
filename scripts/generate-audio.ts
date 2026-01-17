/**
 * VOICEVOX音声生成スクリプト
 * 
 * 使い方:
 * 1. VOICEVOXを起動（localhost:50021でAPIサーバーが立ち上がる）
 * 2. npm run generate-audio
 */

import * as fs from 'fs';
import * as path from 'path';
import { getVoicevoxSpeakerId } from '../config/characters';
import { voicevoxSettings } from '../config/settings';

// VOICEVOX APIのベースURL（configから取得）
const VOICEVOX_URL = voicevoxSettings.apiUrl;

/**
 * VOICEVOXで音声を生成
 */
async function generateVoice(text: string, speakerId: number): Promise<Buffer> {
  // 音声合成用のクエリを作成
  const queryResponse = await fetch(
    `${VOICEVOX_URL}/audio_query?text=${encodeURIComponent(text)}&speaker=${speakerId}`,
    { method: 'POST' }
  );

  if (!queryResponse.ok) {
    throw new Error(`Failed to create audio query: ${queryResponse.status}`);
  }

  const query = await queryResponse.json();

  // 音声を合成
  const synthesisResponse = await fetch(
    `${VOICEVOX_URL}/synthesis?speaker=${speakerId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query),
    }
  );

  if (!synthesisResponse.ok) {
    throw new Error(`Failed to synthesize audio: ${synthesisResponse.status}`);
  }

  const arrayBuffer = await synthesisResponse.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * スクリプトから音声を生成
 */
async function generateAllAudio() {
  // スクリプトを読み込む
  const scriptPath = path.join(__dirname, '../src/data/chatgpt-daily-life-script.ts');
  const scriptContent = fs.readFileSync(scriptPath, 'utf-8');

  // 出力ディレクトリ（configから取得）
  const audioDir = path.join(__dirname, '../public', voicevoxSettings.outputDir);
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  console.log('🎤 VOICEVOX音声生成を開始します...\n');

  // VOICEVOXの接続確認
  try {
    const versionRes = await fetch(`${VOICEVOX_URL}/version`);
    if (!versionRes.ok) throw new Error('Connection failed');
    const version = await versionRes.text();
    console.log(`✅ VOICEVOX接続OK (version: ${version})\n`);
  } catch (error) {
    console.error('❌ VOICEVOXに接続できません。VOICEVOXを起動してください。');
    console.error('   ダウンロード: https://voicevox.hiroshiba.jp/');
    process.exit(1);
  }

  // スクリプトのナレーションを抽出して音声生成
  const narrationRegex = /narration:\s*["'`]([^"'`]+)["'`]/g;
  const speakerRegex = /speaker:\s*["'](\w+)["']/g;

  const narrations: string[] = [];
  const speakers: string[] = [];

  let narrationMatch;
  while ((narrationMatch = narrationRegex.exec(scriptContent)) !== null) {
    narrations.push(narrationMatch[1]);
  }

  let speakerMatch;
  while ((speakerMatch = speakerRegex.exec(scriptContent)) !== null) {
    speakers.push(speakerMatch[1]);
  }

  console.log(`📝 ${narrations.length}件のナレーションを検出\n`);

  for (let i = 0; i < narrations.length; i++) {
    const text = narrations[i];
    const speaker = speakers[i] || 'papa';
    // configから話者IDを取得
    const speakerId = getVoicevoxSpeakerId(speaker);
    const filename = `scene_${String(i + 1).padStart(3, '0')}.wav`;
    const filepath = path.join(audioDir, filename);

    console.log(`🔊 [${i + 1}/${narrations.length}] ${speaker}: "${text.substring(0, 30)}..."`);

    try {
      const audioBuffer = await generateVoice(text, speakerId);
      fs.writeFileSync(filepath, audioBuffer);
      console.log(`   ✅ ${filename} 生成完了\n`);
    } catch (error) {
      console.error(`   ❌ エラー: ${error}\n`);
    }
  }

  console.log('🎉 音声生成が完了しました！');
  console.log(`   出力先: ${audioDir}`);
}

// 実行
generateAllAudio().catch(console.error);
