import React from "react";

interface CyberSlideProps {
  children: React.ReactNode;
  title?: string;
}

/**
 * サイバー風のスライドカード
 * 枠線、シャドウ、グロー効果付き
 */
export const CyberSlide: React.FC<CyberSlideProps> = ({ children, title }) => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "100%",
        padding: "40px 50px",
        background: "rgba(10, 22, 40, 0.85)",
        borderRadius: "12px",
        border: "1px solid rgba(0, 255, 255, 0.3)",
        boxShadow: `
          0 0 30px rgba(0, 255, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.05)
        `,
      }}
    >
      {/* 上部のアクセントライン */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
        }}
      />

      {/* コーナーデコレーション - 左上 */}
      <div
        style={{
          position: "absolute",
          top: "-1px",
          left: "-1px",
          width: "20px",
          height: "20px",
          borderTop: "2px solid #00ffff",
          borderLeft: "2px solid #00ffff",
          borderRadius: "12px 0 0 0",
        }}
      />

      {/* コーナーデコレーション - 右上 */}
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          width: "20px",
          height: "20px",
          borderTop: "2px solid #00ffff",
          borderRight: "2px solid #00ffff",
          borderRadius: "0 12px 0 0",
        }}
      />

      {/* コーナーデコレーション - 左下 */}
      <div
        style={{
          position: "absolute",
          bottom: "-1px",
          left: "-1px",
          width: "20px",
          height: "20px",
          borderBottom: "2px solid #00ffff",
          borderLeft: "2px solid #00ffff",
          borderRadius: "0 0 0 12px",
        }}
      />

      {/* コーナーデコレーション - 右下 */}
      <div
        style={{
          position: "absolute",
          bottom: "-1px",
          right: "-1px",
          width: "20px",
          height: "20px",
          borderBottom: "2px solid #00ffff",
          borderRight: "2px solid #00ffff",
          borderRadius: "0 0 12px 0",
        }}
      />

      {/* タイトルバッジ */}
      {title && (
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "30px",
            padding: "5px 20px",
            background: "linear-gradient(135deg, #00ffff, #0088aa)",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#0a1628",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {title}
        </div>
      )}

      {/* コンテンツ */}
      {children}
    </div>
  );
};
