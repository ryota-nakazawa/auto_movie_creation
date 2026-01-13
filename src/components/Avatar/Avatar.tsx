import React from "react";
import { Img, Video, staticFile, Loop } from "remotion";

interface AvatarProps {
  imagePath?: string; // 画像パス（例: "avatar.png"）
  videoPath?: string; // 動画パス（例: "demo/avatar.mp4"）
}

// ファイル拡張子から動画かどうかを判定
const isVideoFile = (path: string): boolean => {
  const videoExtensions = [".mp4", ".MP4", ".webm", ".mov", ".MOV"];
  return videoExtensions.some((ext) => path.endsWith(ext));
};

export const Avatar: React.FC<AvatarProps> = ({ imagePath, videoPath }) => {
  // 動画アバター（背景透過対応）
  if (videoPath) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          // 背景透過を活かすため背景なし
        }}
      >
        <Loop durationInFrames={1100}>
          <Video
            src={staticFile(videoPath)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Loop>
      </div>
    );
  }

  // 画像パスが動画ファイルの場合（後方互換性）
  if (imagePath && isVideoFile(imagePath)) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Loop durationInFrames={1100}>
          <Video
            src={staticFile(imagePath)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Loop>
      </div>
    );
  }

  // 画像アバター
  if (imagePath) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Img
          src={staticFile(imagePath)}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    );
  }

  // デフォルトのプレースホルダーアバター（小さめ）
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 120,
          height: 300,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #91EAE4, #86A8E7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 30px rgba(134, 168, 231, 0.3)",
        }}
      >
        <div style={{ fontSize: 50, color: "#1a1a2e" }}>🎤</div>
      </div>
    </div>
  );
};
