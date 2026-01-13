import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface ContentSlideProps {
  text: string;
}

export const ContentSlide: React.FC<ContentSlideProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // テキストのアニメーション
  const textProgress = spring({
    frame,
    fps,
    config: {
      damping: 40,
      stiffness: 80,
    },
  });

  const opacity = interpolate(textProgress, [0, 1], [0, 1]);
  const scale = interpolate(textProgress, [0, 1], [0.95, 1]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 40,
      }}
    >
      {/* コンテンツカード */}
      <div
        style={{
          background: "linear-gradient(145deg, #252545, #1e1e3f)",
          borderRadius: 24,
          padding: "50px 60px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          opacity,
          transform: `scale(${scale})`,
          maxWidth: "90%",
        }}
      >
        <p
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.6,
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
