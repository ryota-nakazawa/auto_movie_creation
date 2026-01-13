/**
 * 動画設定
 * FPS、解像度、その他の動画設定を管理します
 */

export const videoSettings = {
  /** フレームレート */
  fps: 30,

  /** 解像度 */
  width: 1920,
  height: 1080,

  /** タイトルスライドの表示時間（秒） */
  titleDurationSeconds: 3,

  /** チャプタータイトルの表示時間（秒） */
  chapterTitleDurationSeconds: 2,

  /** 音声の後に追加する余白（秒） */
  audioBufferSeconds: 0.5,
};

/**
 * VOICEVOX設定
 */
export const voicevoxSettings = {
  /** VOICEVOX APIのURL */
  apiUrl: "http://localhost:50021",

  /** 音声ファイルの出力先（public/からの相対パス） */
  outputDir: "audio",
};

/**
 * スライド設定
 */
export const slideSettings = {
  /** スライド画像の保存先（public/からの相対パス） */
  slideDir: "slides",
};
