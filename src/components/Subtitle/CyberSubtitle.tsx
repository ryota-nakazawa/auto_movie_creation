import React from "react";
import { useCurrentFrame } from "remotion";

interface CyberSubtitleProps {
  text: string;
  speakerName?: string;
}

/**
 * サイバー風の字幕コンポーネント
 * 話者表示、グラデーション背景、スキャンライン効果
 */
export const CyberSubtitle: React.FC<CyberSubtitleProps> = ({
  text,
  speakerName = "ナレーター",
}) => {
  const frame = useCurrentFrame();
  // 話しているインジケーター用のアニメーション
  const pulseOpacity = 0.5 + Math.sin(frame * 0.3) * 0.5;

  if (!text) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        width: "100%",
        maxWidth: "1600px",
        padding: "0 40px",
      }}
    >
      {/* 話者アイコン */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexShrink: 0,
        }}
      >
        {/* パルスインジケーター */}
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#00ffff",
            boxShadow: `0 0 ${10 + pulseOpacity * 10}px rgba(0, 255, 255, ${pulseOpacity})`,
            opacity: 0.5 + pulseOpacity * 0.5,
          }}
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#00ffff",
            textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            letterSpacing: "2px",
          }}
        >
          {speakerName}
        </span>
      </div>

      {/* 字幕テキスト */}
      <div
        style={{
          flex: 1,
          padding: "15px 30px",
          background: "linear-gradient(90deg, rgba(0, 255, 255, 0.15), rgba(0, 255, 255, 0.05), transparent)",
          borderLeft: "3px solid #00ffff",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: 500,
            color: "#ffffff",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            lineHeight: 1.5,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
