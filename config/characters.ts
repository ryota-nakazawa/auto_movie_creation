/**
 * キャラクター設定
 * ここでキャラクターの名前、画像、VOICEVOXの話者IDを設定します
 */

export interface Character {
  /** キャラクターID（スクリプトで使用） */
  id: string;
  /** 表示名 */
  name: string;
  /** キャラクター画像パス（public/からの相対パス） */
  imagePath: string;
  /** VOICEVOX話者ID */
  voicevoxSpeakerId: number;
  /** 表示位置 */
  position: "left" | "right";
}

/**
 * キャラクター定義
 * 必要に応じて追加・変更してください
 */
export const characters: Record<string, Character> = {
  // メインキャラクター（先生役）
  speaker1: {
    id: "speaker1",
    name: "ぴょた",
    imagePath: "characters/speaker1.png",
    voicevoxSpeakerId: 11, // 玄野武宏
    position: "left",
  },
  // サブキャラクター（生徒役）
  speaker2: {
    id: "speaker2",
    name: "あおちゃん",
    imagePath: "characters/speaker2.png",
    voicevoxSpeakerId: 1, // ずんだもん（あまあま）
    position: "right",
  },
};

/**
 * スクリプトで使用するスピーカー名とキャラクターIDの対応
 */
export const speakerMap: Record<string, string> = {
  papa: "speaker1",
  baby: "speaker2",
};

/**
 * キャラクターIDからVOICEVOX話者IDを取得
 */
export function getVoicevoxSpeakerId(speakerId: string): number {
  const characterId = speakerMap[speakerId] || speakerId;
  const character = characters[characterId];
  return character?.voicevoxSpeakerId ?? 1;
}

/**
 * キャラクターIDから表示名を取得
 */
export function getCharacterName(speakerId: string): string {
  const characterId = speakerMap[speakerId] || speakerId;
  const character = characters[characterId];
  return character?.name ?? speakerId;
}
