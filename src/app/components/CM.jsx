"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps";

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const getPseudoRandomNumber = () => {
    const now = new Date();
    const seed =
      now.getFullYear() * 10000000 +
      (now.getMonth() + 1) * 100000 +
      now.getDate() * 1000 +
      Math.floor(now.getHours() / 1.5) * 15 +
      Math.floor(now.getMinutes() / 15);
    return seed % maps.length;
  };

  const updateMap = () => {
    const randomIndex = getPseudoRandomNumber();
    setSelectedMap(maps[randomIndex]);
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const nextInterval = 15 - (minutes % 15);
    const seconds = now.getSeconds();
    return nextInterval * 60 - seconds; // Time until the next 15-minute interval in seconds
  };

  useEffect(() => {
    updateMap(); // Initial update
    setTimeLeft(calculateTimeLeft());

    const intervalId = setInterval(() => {
      updateMap();
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second for the timer

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center mt-12">
      <h3>Map Position Generator</h3>
      <div>
        {selectedMap ? (
          <MapCard
            imgUrl={selectedMap.imgUrl}
            mapName={selectedMap.mapName}
            rules={selectedMap.rules}
          />
        ) : (
          <p>Loading map...</p>
        )}
        <p>Time until next map: {timeLeft} seconds</p>
      </div>
    </div>
  );
};

export default CM;
