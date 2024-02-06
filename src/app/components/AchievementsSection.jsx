"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const VideoSection = () => {
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const playersCount = 32; // Example number of players
const mapsCount = 18; // Example number of maps
const numberOfMatches = 71; // Example number of matches

const achievementsList = [
  {
    metric: "Expected Amount of Players",
    value: playersCount.toString(),
  },
  {
    metric: "Map Rule Sets",
    value: mapsCount.toString(),
  },
  {
    metric: "Expected Matches",
    value: numberOfMatches.toString(),
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
      <p className="py-6">&nbsp;</p>

      <VideoSection />
    </div>
  );
};

export default AchievementsSection;
