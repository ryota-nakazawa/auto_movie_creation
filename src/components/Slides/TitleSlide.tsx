import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface TitleSlideProps {
  title: string;
  author: string;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ title, author }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // タイトルのアニメーション
  const titleProgress = spring({
    frame,
    fps,
    config: {
      damping: 50,
      stiffness: 100,
    },
  });

  // 著者名のアニメーション（遅れて表示）
  const authorProgress = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 50,
      stiffness: 100,
    },
  });

  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleY = interpolate(titleProgress, [0, 1], [50, 0]);

  const authorOpacity = interpolate(authorProgress, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
      }}
    >
      {/* タイトル */}
      <h1
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.3,
          margin: 0,
          whiteSpace: "pre-line",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {title}
      </h1>

      {/* 著者名 */}
      <p
        style={{
          fontSize: 28,
          fontWeight: 500,
          color: "#86A8E7",
          marginTop: 40,
          opacity: authorOpacity,
        }}
      >
        {author}
      </p>

      {/* 装飾ライン */}
      <div
        style={{
          width: interpolate(titleProgress, [0, 1], [0, 400]),
          height: 4,
          background: "linear-gradient(90deg, #91EAE4, #86A8E7)",
          borderRadius: 2,
          marginTop: 30,
        }}
      />
    </AbsoluteFill>
  );
};
