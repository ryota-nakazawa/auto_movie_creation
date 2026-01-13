import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface SubtitleProps {
  text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  const frame = useCurrentFrame();

  // フェードインアニメーション
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 80px",
        opacity,
      }}
    >
      <p
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.5,
          margin: 0,
          padding: "12px 30px",
          background: "rgba(0, 0, 0, 0.6)",
          borderRadius: 12,
          backdropFilter: "blur(10px)",
          maxWidth: "90%",
        }}
      >
        {text}
      </p>
    </div>
  );
};
