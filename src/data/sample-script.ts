/**
 * 動画スクリプト テンプレート
 * 
 * このファイルを編集して、あなただけの動画を作成しましょう！
 * 
 * 使い方:
 * 1. chapters と scenes を編集
 * 2. public/slides/ にスライド画像を配置
 * 3. npm run generate-audio で音声生成
 * 4. npm run sync-audio で音声同期
 * 5. npm run dev でプレビュー
 */

import { z } from "zod";

// Speaker型
export type Speaker = "papa" | "baby";

// Scene型
export interface Scene {
  type: string;
  slideImage?: string;
  text?: string;
  videoPath?: string;
  showAvatar?: boolean;
  narration: string;
  speaker: Speaker;
  durationInSeconds: number;
}

// VideoScript型
export interface VideoScript {
  title: string;
  author: string;
  chapters: {
    title: string;
    scenes: Scene[];
  }[];
}

// Zodスキーマ
export const VideoScriptSchema = z.object({
  title: z.string(),
  author: z.string(),
  chapters: z.array(z.object({
    title: z.string(),
    scenes: z.array(z.object({
      type: z.string(),
      slideImage: z.string().optional(),
      text: z.string().optional(),
      videoPath: z.string().optional(),
      showAvatar: z.boolean().optional(),
      narration: z.string(),
      speaker: z.enum(["papa", "baby"]),
      durationInSeconds: z.number(),
    })),
  })),
});

// 総フレーム数を計算するヘルパー関数
export function calculateTotalFrames(script: VideoScript, fps: number): number {
  let totalSeconds = 0;

  // タイトル: 3秒
  totalSeconds += 3;

  // 各チャプター
  script.chapters.forEach((chapter) => {
    // チャプタータイトル: 2秒
    totalSeconds += 2;

    // 各シーン
    chapter.scenes.forEach((scene) => {
      totalSeconds += scene.durationInSeconds;
    });
  });

  return Math.ceil(totalSeconds * fps);
}

/**
 * サンプルスクリプト
 * 
 * ここを編集してあなたの動画を作成してください
 */
export const sampleScript: VideoScript = {
  // 動画タイトル
  title: "あなたの動画タイトル",
  // 作者名
  author: "あなたの名前",

  chapters: [
    {
      title: "はじめに",
      scenes: [
        {
          type: "slide",
          // スライド画像を使う場合（public/slides/ に画像を配置）
          // slideImage: "/slides/slide_01.png",
          // Markdownでスライドを書く場合
          text: `# こんにちは！

今日の動画へようこそ 👋`,
          narration: "こんにちは！今日の動画を見ていただきありがとうございます。",
          speaker: "papa",
          durationInSeconds: 5,
        },
        {
          type: "slide",
          text: `# よろしくお願いします！

一緒に学んでいきましょう`,
          narration: "よろしくお願いします！一緒に楽しく学んでいきましょう。",
          speaker: "baby",
          durationInSeconds: 4,
        },
      ],
    },
    {
      title: "メインコンテンツ",
      scenes: [
        {
          type: "slide",
          text: `# ポイント1

大事なことを説明します`,
          narration: "まずは1つ目のポイントについて説明しますね。",
          speaker: "papa",
          durationInSeconds: 5,
        },
        {
          type: "slide",
          text: `# なるほど！

わかりやすいね`,
          narration: "なるほど！とてもわかりやすいね。",
          speaker: "baby",
          durationInSeconds: 3,
        },
      ],
    },
    {
      title: "まとめ",
      scenes: [
        {
          type: "slide",
          text: `# まとめ

今日学んだこと
- ポイント1
- ポイント2`,
          narration: "今日のまとめです。大事なポイントを振り返りましょう。",
          speaker: "papa",
          durationInSeconds: 5,
        },
        {
          type: "slide",
          text: `# ありがとうございました！

チャンネル登録よろしくね 🙏`,
          narration: "ご視聴ありがとうございました！チャンネル登録もよろしくお願いします。",
          speaker: "baby",
          durationInSeconds: 4,
        },
      ],
    },
  ],
};
