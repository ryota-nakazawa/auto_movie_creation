import React from "react";
import ReactMarkdown from "react-markdown";
import { staticFile } from "remotion";

interface MarkdownSlideProps {
  content: string;
}

/**
 * Markdown対応のフルエリアスライド
 * カードなしで左側エリアをフル活用
 */
export const MarkdownSlide: React.FC<MarkdownSlideProps> = ({ content }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <ReactMarkdown
        components={{
          // H1 - メインタイトル（大きく目立つ）
          h1: ({ children }) => (
            <h1
              style={{
                margin: "0 0 30px 0",
                fontSize: "56px",
                fontWeight: "bold",
                color: "#00ffff",
                textShadow: "0 0 30px rgba(0, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              {children}
            </h1>
          ),
          // H2 - セクションタイトル
          h2: ({ children }) => (
            <h2
              style={{
                margin: "20px 0 20px 0",
                fontSize: "38px",
                fontWeight: "bold",
                color: "#ffffff",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                lineHeight: 1.3,
                borderLeft: "4px solid #00ffff",
                paddingLeft: "16px",
              }}
            >
              {children}
            </h2>
          ),
          // H3 - サブセクション
          h3: ({ children }) => (
            <h3
              style={{
                margin: "16px 0 12px 0",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#7dd3fc",
                lineHeight: 1.3,
              }}
            >
              {children}
            </h3>
          ),
          // 段落
          p: ({ children }) => (
            <p
              style={{
                margin: "0 0 20px 0",
                fontSize: "28px",
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: 1.7,
              }}
            >
              {children}
            </p>
          ),
          // リスト（箇条書き）- 目立つデザイン
          ul: ({ children }) => (
            <ul
              style={{
                margin: "10px 0 20px 0",
                padding: 0,
                listStyle: "none",
              }}
            >
              {children}
            </ul>
          ),
          // リストアイテム - カード風デザイン
          li: ({ children }) => (
            <li
              style={{
                margin: "0 0 14px 0",
                padding: "14px 20px",
                fontSize: "26px",
                color: "#ffffff",
                lineHeight: 1.5,
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                background: "linear-gradient(135deg, rgba(0, 255, 255, 0.08) 0%, rgba(0, 100, 150, 0.15) 100%)",
                borderRadius: "8px",
                border: "1px solid rgba(0, 255, 255, 0.2)",
                backdropFilter: "blur(4px)",
              }}
            >
              <span
                style={{
                  color: "#00ffff",
                  fontWeight: "bold",
                  flexShrink: 0,
                  fontSize: "22px",
                }}
              >
                ▶
              </span>
              <span style={{ flex: 1 }}>{children}</span>
            </li>
          ),
          // 強調（太字）
          strong: ({ children }) => (
            <strong
              style={{
                color: "#00ffff",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
              }}
            >
              {children}
            </strong>
          ),
          // コード（インライン & ブロック）
          code: ({ children, className }) => {
            const isCodeBlock = className?.includes("language-");

            if (isCodeBlock) {
              return (
                <code
                  style={{
                    display: "block",
                    padding: "20px 24px",
                    background: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "12px",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                    fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
                    fontSize: "22px",
                    color: "#7dd3fc",
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                    overflowX: "auto",
                    boxShadow: "inset 0 0 30px rgba(0, 255, 255, 0.05)",
                  }}
                >
                  {children}
                </code>
              );
            }

            return (
              <code
                style={{
                  padding: "4px 10px",
                  background: "rgba(0, 255, 255, 0.15)",
                  borderRadius: "6px",
                  fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
                  fontSize: "24px",
                  color: "#7dd3fc",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                }}
              >
                {children}
              </code>
            );
          },
          // preタグ
          pre: ({ children }) => (
            <pre
              style={{
                margin: "10px 0 24px 0",
                padding: 0,
                background: "transparent",
              }}
            >
              {children}
            </pre>
          ),
          // 画像 - 大きく表示
          img: ({ src, alt }) => {
            const imageSrc = src?.startsWith("http") ? src : staticFile(src || "");
            return (
              <div
                style={{
                  margin: "20px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <img
                  src={imageSrc}
                  alt={alt || ""}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "450px",
                    borderRadius: "12px",
                    border: "2px solid rgba(0, 255, 255, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 255, 0.1)",
                  }}
                />
                {alt && (
                  <span
                    style={{
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 0.6)",
                      fontStyle: "italic",
                    }}
                  >
                    {alt}
                  </span>
                )}
              </div>
            );
          },
          // 水平線
          hr: () => (
            <hr
              style={{
                margin: "24px 0",
                border: "none",
                height: "2px",
                background: "linear-gradient(90deg, #00ffff, rgba(0, 255, 255, 0.3), transparent)",
              }}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
