import React from "react";

/**
 * サイバー風の背景コンポーネント
 * 青緑系のデジタルパターン、サーキット風デザイン
 */
export const CyberBackground: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(0, 200, 200, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #0a1628 0%, #0d1f35 50%, #0a1628 100%)
        `,
        overflow: "hidden",
      }}
    >
      {/* サーキットパターン - 左側 */}
      <svg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "150px",
          opacity: 0.4,
        }}
        viewBox="0 0 150 1080"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cyberGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="30%" stopColor="#00ffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#00ffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* 縦のライン */}
        <line x1="20" y1="0" x2="20" y2="1080" stroke="url(#cyberGrad1)" strokeWidth="2" />
        <line x1="60" y1="0" x2="60" y2="1080" stroke="url(#cyberGrad1)" strokeWidth="1" />
        <line x1="100" y1="0" x2="100" y2="1080" stroke="url(#cyberGrad1)" strokeWidth="1" />
        {/* ノード（丸） */}
        <circle cx="20" cy="200" r="4" fill="#00ffff" />
        <circle cx="60" cy="400" r="3" fill="#00ffff" />
        <circle cx="20" cy="600" r="4" fill="#00ffff" />
        <circle cx="100" cy="800" r="3" fill="#00ffff" />
        {/* 横のライン */}
        <line x1="20" y1="200" x2="60" y2="200" stroke="#00ffff" strokeWidth="1" />
        <line x1="60" y1="400" x2="100" y2="400" stroke="#00ffff" strokeWidth="1" />
        <line x1="20" y1="600" x2="100" y2="600" stroke="#00ffff" strokeWidth="1" />
      </svg>

      {/* サーキットパターン - 右側 */}
      <svg
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "150px",
          opacity: 0.3,
        }}
        viewBox="0 0 150 1080"
        preserveAspectRatio="none"
      >
        <line x1="130" y1="0" x2="130" y2="1080" stroke="url(#cyberGrad1)" strokeWidth="2" />
        <line x1="90" y1="0" x2="90" y2="1080" stroke="url(#cyberGrad1)" strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="1080" stroke="url(#cyberGrad1)" strokeWidth="1" />
        <circle cx="130" cy="300" r="4" fill="#00ffff" />
        <circle cx="90" cy="500" r="3" fill="#00ffff" />
        <circle cx="130" cy="700" r="4" fill="#00ffff" />
      </svg>

      {/* グロー効果 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* 上部と下部のグラデーションオーバーレイ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, rgba(0, 255, 255, 0.1), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
