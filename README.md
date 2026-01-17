# Remotion 対談動画ジェネレーター

Remotionを使って、キャラクター同士が対談する形式の解説動画を自動生成するテンプレートです。

## 🎬 特徴

- **対談形式**: 2人のキャラクターが会話する形式の動画
- **スライド表示**: 画像またはMarkdownでスライドを表示
- **自動音声生成**: VOICEVOXで日本語音声を自動生成
- **カスタマイズ可能**: キャラクター、スライド、台本を自由にカスタマイズ

## 📋 必要なもの

- Node.js 18以上
- [VOICEVOX](https://voicevox.hiroshiba.jp/) - 音声合成エンジン（無料）

## 🚀 セットアップ

### 1. リポジトリをクローン

```bash
git clone https://github.com/ryota-nakazawa/auto_movie_creation.git
cd auto_movie_creation
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. VOICEVOXをインストール・起動

1. [VOICEVOX公式サイト](https://voicevox.hiroshiba.jp/)からダウンロード
2. VOICEVOXを起動（APIサーバーが `localhost:50021` で立ち上がります）

## 📝 使い方

### Step 1: キャラクターを設定

`config/characters.ts` を編集して、キャラクターを設定します。

```typescript
export const characters = {
  speaker1: {
    name: "あなたのキャラクター名",
    imagePath: "characters/your-character.png",
    voicevoxSpeakerId: 1, // VOICEVOX話者ID
  },
  // ...
};
```

### Step 2: スライドを用意

`public/slides/` にスライド画像を配置します。

#### 方法1: 直接画像を配置
画像ファイル（PNG/JPG）を直接 `public/slides/` に配置します。

#### 方法2: HTMLスライドからキャプチャ
HTMLでリッチなスライドを作成し、Puppeteerで画像として出力できます。

1. `public/slides.html` にHTMLスライドを作成
2. 以下のコマンドで画像をキャプチャ:

```bash
npm run capture-slides
```

出力先: `public/slides/slide.001.png` 〜

#### 方法3: Markdown形式
スクリプト内でMarkdown形式でスライドを記述することもできます。

### Step 3: 台本を作成

`src/data/sample-script.ts` を編集して、台本を作成します。

```typescript
{
  type: "slide",
  slideImage: "/slides/slide_01.png", // または text: "# マークダウン"
  narration: "ここに読み上げるテキストを書きます",
  speaker: "papa", // または "baby"
  durationInSeconds: 5,
}
```

### Step 4: 音声を生成

```bash
# VOICEVOXを起動した状態で実行
npm run generate-audio
```

### Step 5: 音声の長さを同期

```bash
npm run sync-audio
```

### Step 6: プレビュー

```bash
npm run dev
```

ブラウザで http://localhost:3000 にアクセスしてプレビューを確認します。

### Step 7: 動画を書き出し

```bash
npx remotion render ExplanationVideo output.mp4
```

## 📁 ディレクトリ構成

```
├── config/
│   ├── characters.ts    # キャラクター設定
│   └── settings.ts      # 動画設定
├── public/
│   ├── audio/           # 生成された音声ファイル
│   ├── characters/      # キャラクター画像
│   └── slides/          # 本番用スライド画像
├── slide-proposals/     # スライド案・下書き（作業用）
├── src/
│   └── data/
│       └── sample-script.ts  # 台本
└── scripts/
    ├── capture-slides.js      # HTMLスライドを画像化
    ├── generate-audio.ts      # 音声生成
    └── sync-audio-duration.ts # 音声同期
```

> **Note**: `public/`配下と`slide-proposals/`には`.gitkeep`が配置されています。
> ファイルの中身は`.gitignore`で除外されますが、ディレクトリ構造はクローン時に維持されます。

## 🎤 VOICEVOX話者ID一覧

代表的な話者ID:

| ID | キャラクター名 |
|----|--------------|
| 1  | ずんだもん（あまあま） |
| 3  | ずんだもん（ノーマル） |
| 11 | 玄野武宏 |
| 13 | 青山龍星 |
| 14 | 冥鳴ひまり |

全話者リストは VOICEVOX を起動して確認できます。

## 📄 ライセンス

MIT License

## 🙏 クレジット

- [Remotion](https://www.remotion.dev/) - React動画フレームワーク
- [VOICEVOX](https://voicevox.hiroshiba.jp/) - 音声合成エンジン
