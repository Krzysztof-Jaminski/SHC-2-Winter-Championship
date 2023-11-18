import React, { useState, useEffect } from "react";

const BackgroundMusic = ({ src }) => {
  const [audio, setAudio] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audioObj = new Audio(src);
    audioObj.loop = true;
    audioObj.muted = isMuted;
    setAudio(audioObj);

    audioObj
      .play()
      .catch((error) => console.error("Audio playback failed:", error));

    return () => {
      audioObj.pause();
    };
  }, [src, isMuted]);

  const toggleMute = () => {
    if (audio) {
      const newMutedState = !audio.muted;
      audio.muted = newMutedState;
      setIsMuted(newMutedState);
      if (newMutedState) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  return (
    <button onClick={toggleMute}>
      {isMuted ? "Enable Sound" : "Mute Sound"}
    </button>
  );
};

export default BackgroundMusic;
