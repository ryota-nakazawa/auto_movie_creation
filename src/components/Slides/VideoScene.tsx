import React from "react";
import {
  AbsoluteFill,
  Video,
  staticFile,
  interpolate,
  useCurrentFrame,
} from "remotion";

interface VideoSceneProps {
  videoPath: string;
  showAvatar?: boolean;
  avatarContent?: React.ReactNode;
}

export const VideoSceneComponent: React.FC<VideoSceneProps> = ({
  videoPath,
  showAvatar = false,
  avatarContent,
}) => {
  const frame = useCurrentFrame();

  // フェードインアニメーション
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000",
        opacity,
      }}
    >
      {/* 動画 */}
      <Video
        src={staticFile(videoPath)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      {/* PiP アバター（右下に小さく表示） */}
      {showAvatar && avatarContent && (
        <div
          style={{
            position: "absolute",
            bottom: 140,
            right: 40,
            width: 200,
            height: 250,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            border: "3px solid rgba(255,255,255,0.2)",
            background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          }}
        >
          {avatarContent}
        </div>
      )}
    </AbsoluteFill>
  );
};
