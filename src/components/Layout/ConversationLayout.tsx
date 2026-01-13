import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame, staticFile } from "remotion";

interface ConversationLayoutProps {
  slideContent: React.ReactNode;
  subtitleContent?: React.ReactNode;
  speaker: "papa" | "baby" | "none";
  papaImage?: string;
  babyImage?: string;
}

/**
 * 対談風レイアウト
 * 左右にキャラクターを配置し、話者をハイライト
 */
export const ConversationLayout: React.FC<ConversationLayoutProps> = ({
  slideContent,
  subtitleContent,
  speaker = "papa",
  papaImage = "characters/papa.png",
  babyImage = "characters/baby.png",
}) => {
  const frame = useCurrentFrame();

  // 話者アニメーション（バウンス効果）
  const papaScale = speaker === "papa"
    ? interpolate(Math.sin(frame * 0.15), [-1, 1], [1, 1.05])
    : 0.9;
  const babyScale = speaker === "baby"
    ? interpolate(Math.sin(frame * 0.15), [-1, 1], [1, 1.05])
    : 0.9;

  // 話者の明るさ
  const papaOpacity = speaker === "papa" ? 1 : 0.6;
  const babyOpacity = speaker === "baby" ? 1 : 0.6;

  // 話者のグロー効果
  const papaGlow = speaker === "papa"
    ? "drop-shadow(0 0 20px rgba(255, 200, 100, 0.6))"
    : "none";
  const babyGlow = speaker === "baby"
    ? "drop-shadow(0 0 20px rgba(255, 150, 200, 0.6))"
    : "none";

  return (
    <AbsoluteFill
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
      }}
    >
      {/* 背景装飾 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(100, 150, 255, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* 左側：パパキャラ */}
      <div
        style={{
          position: "absolute",
          left: 30,
          bottom: 140,
          width: 280,
          height: 350,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          transform: `scale(${papaScale})`,
          opacity: papaOpacity,
          filter: papaGlow,
          transition: "opacity 0.3s",
        }}
      >
        <Img
          src={staticFile(papaImage)}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        {/* 話者インジケーター */}
        {speaker === "papa" && (
          <div
            style={{
              position: "absolute",
              top: -10,
              left: "50%",
              transform: "translateX(-50%)",
              padding: "6px 16px",
              background: "linear-gradient(135deg, #ff9500 0%, #ff5e3a 100%)",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              boxShadow: "0 4px 15px rgba(255, 149, 0, 0.4)",
            }}
          >
            ぴょた
          </div>
        )}
      </div>

      {/* 右側：赤ちゃんキャラ */}
      <div
        style={{
          position: "absolute",
          right: 30,
          bottom: 140,
          width: 260,
          height: 320,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          transform: `scale(${babyScale})`,
          opacity: babyOpacity,
          filter: babyGlow,
          transition: "opacity 0.3s",
        }}
      >
        <Img
          src={staticFile(babyImage)}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        {/* 話者インジケーター */}
        {speaker === "baby" && (
          <div
            style={{
              position: "absolute",
              top: -10,
              left: "50%",
              transform: "translateX(-50%)",
              padding: "6px 16px",
              background: "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              boxShadow: "0 4px 15px rgba(255, 107, 157, 0.4)",
            }}
          >
            あおちゃん
          </div>
        )}
      </div>

      {/* 中央：スライドコンテンツ */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 320,
          right: 300,
          bottom: 180,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "30px 40px",
          background: "rgba(0, 0, 0, 0.3)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        {slideContent}
      </div>

      {/* 字幕エリア */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 130,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 320,
          paddingRight: 300,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 70%, transparent 100%)",
        }}
      >
        {subtitleContent}
      </div>

      {/* 下部アクセントライン */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #ff9500, #ff6b9d, #ff9500)",
          opacity: 0.8,
        }}
      />
    </AbsoluteFill>
  );
};
