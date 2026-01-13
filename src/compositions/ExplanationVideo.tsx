import React from "react";
import { Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { z } from "zod";
import { ConversationLayout } from "../components/Layout/ConversationLayout";
import { CyberSlide } from "../components/Slide/CyberSlide";
import { MarkdownSlide } from "../components/Slide/MarkdownSlide";
import { CyberSubtitle } from "../components/Subtitle/CyberSubtitle";
import { VideoSceneComponent } from "../components/Slides/VideoScene";
import { Avatar } from "../components/Avatar/Avatar";
import { VideoScriptSchema, sampleScript, Scene, Speaker } from "../data/sample-script";

// コンポジションのプロパティスキーマ
export const explanationVideoSchema = z.object({
  script: VideoScriptSchema.optional(),
  avatarPath: z.string().optional(),
});

type ExplanationVideoProps = z.infer<typeof explanationVideoSchema>;

/**
 * サイバー風タイトルスライド
 */
const CyberTitleSlide: React.FC<{ title: string; author?: string }> = ({
  title,
  author,
}) => {
  return (
    <CyberSlide>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "64px",
            fontWeight: "bold",
            color: "#ffffff",
            textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h1>
        {author && (
          <p
            style={{
              margin: 0,
              fontSize: "24px",
              color: "#00ffff",
              opacity: 0.8,
            }}
          >
            by {author}
          </p>
        )}
      </div>
    </CyberSlide>
  );
};


/**
 * サイバー風章スライド
 */
const CyberChapterSlide: React.FC<{
  chapterNumber: number;
  title: string;
}> = ({ chapterNumber, title }) => {
  return (
    <CyberSlide title={`Chapter ${chapterNumber}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "#00ffff",
            textShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
            fontFamily: "monospace",
          }}
        >
          {String(chapterNumber).padStart(2, "0")}
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "48px",
            fontWeight: "bold",
            color: "#ffffff",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
          }}
        >
          {title}
        </h2>
      </div>
    </CyberSlide>
  );
};

export const ExplanationVideo: React.FC<ExplanationVideoProps> = ({
  script = sampleScript,
  avatarPath,
}) => {
  const { fps } = useVideoConfig();

  const titleDurationFrames = 3 * fps;
  const chapterTitleDurationFrames = 2 * fps;

  let currentFrame = 0;
  let sceneCounter = 1; // 音声ファイルのカウンター
  const sequences: React.ReactNode[] = [];

  // タイトルスライド
  sequences.push(
    <Sequence key="title" from={currentFrame} durationInFrames={titleDurationFrames}>
      <ConversationLayout
        slideContent={<CyberTitleSlide title={script.title} author={script.author} />}
        subtitleContent={null}
        speaker="papa"
      />
    </Sequence>
  );
  currentFrame += titleDurationFrames;

  // 各章を処理
  script.chapters.forEach((chapter, chapterIndex) => {
    // 章タイトル
    sequences.push(
      <Sequence
        key={`chapter-${chapterIndex}`}
        from={currentFrame}
        durationInFrames={chapterTitleDurationFrames}
      >
        <ConversationLayout
          slideContent={
            <CyberChapterSlide chapterNumber={chapterIndex + 1} title={chapter.title} />
          }
          subtitleContent={null}
          speaker="papa"
        />
      </Sequence>
    );
    currentFrame += chapterTitleDurationFrames;

    // 各シーン
    chapter.scenes.forEach((scene: Scene, sceneIndex) => {
      const sceneDurationFrames = Math.ceil(scene.durationInSeconds * fps);

      if (scene.type === "slide") {
        const speaker = scene.speaker || "papa";
        const audioPath = `audio/scene_${String(sceneCounter).padStart(3, '0')}.wav`;
        sceneCounter++;

        // スライドコンテンツ: slideImageがあれば画像、なければMarkdown
        const slideContent = scene.slideImage ? (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}>
            <img
              src={staticFile(scene.slideImage)}
              alt="slide"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0, 255, 255, 0.3)',
              }}
            />
          </div>
        ) : (
          <MarkdownSlide content={scene.text || ''} />
        );

        sequences.push(
          <Sequence
            key={`chapter-${chapterIndex}-scene-${sceneIndex}`}
            from={currentFrame}
            durationInFrames={sceneDurationFrames}
          >
            <ConversationLayout
              slideContent={slideContent}
              subtitleContent={<CyberSubtitle text={scene.narration} speakerName={speaker === "papa" ? "ぴょた" : "あおちゃん"} />}
              speaker={speaker as Speaker}
            />
            <Audio src={staticFile(audioPath)} volume={1} />
          </Sequence>
        );
      } else if (scene.type === "video") {
        sequences.push(
          <Sequence
            key={`chapter-${chapterIndex}-scene-${sceneIndex}`}
            from={currentFrame}
            durationInFrames={sceneDurationFrames}
          >
            <>
              <VideoSceneComponent
                videoPath={scene.videoPath || ''}
                showAvatar={scene.showAvatar}
                avatarContent={<Avatar videoPath={avatarPath} />}
              />
              {scene.narration && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: 40,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                  }}
                >
                  <CyberSubtitle text={scene.narration} speakerName="ナレーター" />
                </div>
              )}
            </>
          </Sequence>
        );
      }

      currentFrame += sceneDurationFrames;
    });
  });

  return <>{sequences}</>;
};
