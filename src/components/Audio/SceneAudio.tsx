import React from "react";
import { Audio, staticFile } from "remotion";

interface SceneAudioProps {
  audioPath: string;
  startFrom?: number;
}

/**
 * シーンの音声を再生するコンポーネント
 */
export const SceneAudio: React.FC<SceneAudioProps> = ({
  audioPath,
  startFrom = 0,
}) => {
  return (
    <Audio
      src={staticFile(audioPath)}
      startFrom={startFrom}
      volume={1}
    />
  );
};
