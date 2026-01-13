import React from "react";
import { AbsoluteFill } from "remotion";
import { CyberBackground } from "../Background/CyberBackground";

interface CyberVideoLayoutProps {
  slideContent: React.ReactNode;
  avatarContent?: React.ReactNode;
  subtitleContent?: React.ReactNode;
}

/**
 * サイバー風のビデオレイアウト
 * 左側：コンテンツエリア（フル活用）
 * 右側：アバター
 * 下部：字幕
 */
export const CyberVideoLayout: React.FC<CyberVideoLayoutProps> = ({
  slideContent,
  avatarContent,
  subtitleContent,
}) => {
  return (
    <AbsoluteFill
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* サイバー風背景 */}
      <CyberBackground />

      {/* メインコンテンツ(スライド)エリア - 左側をフル活用 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: avatarContent ? 480 : 0, // アバターがある場合は右側を空ける
          bottom: 160, // 字幕エリア分
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "40px 50px",
          overflow: "hidden",
        }}
      >
        {slideContent}
      </div>

      {/* アバターエリア（右側） */}
      {avatarContent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 160,
            width: 480,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // 背景にグラデーション
            background: "linear-gradient(to left, rgba(0, 20, 40, 0.8) 0%, transparent 100%)",
          }}
        >
          {avatarContent}
        </div>
      )}

      {/* 字幕エリア（下部） */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 50,
          paddingRight: avatarContent ? 500 : 50,
          background: "linear-gradient(to top, rgba(0, 10, 20, 0.95) 0%, rgba(0, 20, 40, 0.8) 70%, transparent 100%)",
        }}
      >
        {subtitleContent}
      </div>

      {/* 下部のアクセントライン */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #00ffff 20%, #00ffff 80%, transparent)",
          opacity: 0.8,
        }}
      />

      {/* サイドのアクセントライン */}
      {avatarContent && (
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 478,
            bottom: 200,
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.3), transparent)",
          }}
        />
      )}
    </AbsoluteFill>
  );
};
