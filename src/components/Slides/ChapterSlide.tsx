import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface ChapterSlideProps {
  chapterNumber: number;
  title: string;
}

export const ChapterSlide: React.FC<ChapterSlideProps> = ({
  chapterNumber,
  title,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 章番号のアニメーション
  const numberProgress = spring({
    frame,
    fps,
    config: {
      damping: 30,
      stiffness: 150,
    },
  });

  // タイトルのアニメーション
  const titleProgress = spring({
    frame: frame - 8,
    fps,
    config: {
      damping: 40,
      stiffness: 100,
    },
  });

  const numberScale = interpolate(numberProgress, [0, 1], [0.5, 1]);
  const numberOpacity = interpolate(numberProgress, [0, 1], [0, 1]);

  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleX = interpolate(titleProgress, [0, 1], [-30, 0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      {/* 章番号 */}
      <div
        style={{
          fontSize: 120,
          fontWeight: 900,
          color: "transparent",
          background: "linear-gradient(135deg, #91EAE4, #86A8E7)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          opacity: numberOpacity,
          transform: `scale(${numberScale})`,
        }}
      >
        {String(chapterNumber).padStart(2, "0")}
      </div>

      {/* 章タイトル */}
      <h2
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#ffffff",
          marginTop: 20,
          opacity: titleOpacity,
          transform: `translateX(${titleX}px)`,
          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        {title}
      </h2>

      {/* 装飾ドット */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 30,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: i === chapterNumber % 3 ? "#86A8E7" : "#ffffff30",
              opacity: numberOpacity,
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
