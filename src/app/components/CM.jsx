"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps";

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const getPseudoRandomNumber = () => {
    const now = new Date();
    const seed = now.getDate() + now.getMonth() + now.getFullYear();
    const numbers = Array.from({ length: maps.length }, (_, i) => i);

    // Simple shuffle using the seed
    for (let i = numbers.length - 1; i > 0; i--) {
      const j =
        (seed + Math.floor(now.getHours() * 60 + now.getMinutes())) % (i + 1);
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Get the current index based on time
    const index =
      Math.floor((now.getHours() * 60) / 15 + now.getMinutes() / 15) %
      maps.length;
    return numbers[index];
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
