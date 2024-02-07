"use client";
import React from "react";
import { useState, useEffect } from "react";

export const VideoSection = () => {
  const [randomStartTime, setRandomStartTime] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const maxDuration = 35 * 60;

    const randomTime = Math.random() * maxDuration;
    setRandomStartTime(randomTime);
    setIsVideoLoaded(true);
  }, []);

  return (
    <div className="text-center mt-8">
      <div className="relative" style={{ paddingTop: "56.25%" }}>
        {isVideoLoaded && (
          <iframe
            id="youtubeVideo"
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/zpQ6H-xDWAc?autoplay=1&mute=1&loop=1&playlist=zpQ6H-xDWAc&controls=0&modestbranding=1&start=${randomStartTime}`}
            title="Tournament Game Live"
            allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};
