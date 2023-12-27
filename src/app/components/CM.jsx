"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps";

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  };

  const getMapIndex = () => {
    const now = new Date();
    const dateString = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;

    const hash = simpleHash(dateString);
    return Math.abs(hash) % maps.length; // Use absolute value to avoid negative index
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const minutes = now.getUTCMinutes();
    const nextInterval = 15 - (minutes % 15);
    const seconds = now.getUTCSeconds();
    return nextInterval * 60 - seconds; // Time until the next 15-minute interval in seconds
  };

  const updateMapAndTimer = () => {
    setSelectedMap(maps[getMapIndex()]);
    setTimeLeft(calculateTimeLeft());
  };

  useEffect(() => {
    updateMapAndTimer(); // Initial update
    const timerInterval = setInterval(updateMapAndTimer, 1000); // Update every second

    return () => clearInterval(timerInterval);
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
