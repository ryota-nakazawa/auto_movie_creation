import React from "react";
import { AbsoluteFill } from "remotion";

interface VideoLayoutProps {
  slideContent: React.ReactNode;
  avatarContent?: React.ReactNode;
  subtitleContent?: React.ReactNode;
  backgroundColor?: string;
}

export const VideoLayout: React.FC<VideoLayoutProps> = ({
  slideContent,
  avatarContent,
  subtitleContent,
  backgroundColor = "#1a1a2e",
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* スライドエリア（メイン） */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 450, // アバター分のスペース
          bottom: 160, // 字幕エリア分
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        {slideContent}
      </div>

      {/* アバターエリア（右側） */}
      {avatarContent && (
        <div
          style={{
            position: "absolute",
            top: 50,
            right: 40,
            bottom: 160,
            width: 400,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            overflow: "hidden",
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
          justifyContent: "center",
          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
        }}
      >
        {subtitleContent}
      </div>
    </AbsoluteFill>
  );
};
