import React, { useState, useEffect } from "react";

const BackgroundMusic = ({ src }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create an audio object
    const audioObj = new Audio(src);
    audioObj.loop = true;
    setAudio(audioObj);

    return () => {
      audioObj.pause();
    };
  }, [src]);

  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button onClick={togglePlay}>
      {isPlaying ? "Pause Music" : "Play Music"}
    </button>
  );
};

export default BackgroundMusic;
