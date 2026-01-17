import "./index.css";
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import {
  ExplanationVideo,
  explanationVideoSchema,
} from "./compositions/ExplanationVideo";
import {
  sampleScript,
  calculateTotalFrames,
} from "./data/sample-script";
import {
  chatgptDailyLifeScript,
} from "./data/chatgpt-daily-life-script";

// Each <Composition> is an entry in the sidebar!

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* ChatGPT日常生活活用法10選 */}
      <Composition
        id="ChatGPTDailyLife"
        component={ExplanationVideo}
        durationInFrames={calculateTotalFrames(chatgptDailyLifeScript, FPS)}
        fps={FPS}
        width={1920}
        height={1080}
        schema={explanationVideoSchema}
        defaultProps={{
          script: chatgptDailyLifeScript,
          avatarPath: "demo/avator.mp4",
        }}
      />

      {/* 解説動画テンプレート（サンプル） */}
      <Composition
        id="ExplanationVideo"
        component={ExplanationVideo}
        durationInFrames={calculateTotalFrames(sampleScript, FPS)}
        fps={FPS}
        width={1920}
        height={1080}
        schema={explanationVideoSchema}
        defaultProps={{
          script: sampleScript,
          avatarPath: "demo/avator.mp4",
        }}
      />

      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />

      {/* Mount any React component to make it show up in the sidebar and work on it individually! */}
      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema2}
        defaultProps={{
          logoColor1: "#91dAE2" as const,
          logoColor2: "#86A8E7" as const,
        }}
      />
    </>
  );
};
