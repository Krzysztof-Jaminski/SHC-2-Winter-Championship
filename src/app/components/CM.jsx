"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps";

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const getMapIndex = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1; // getMonth() returns 0-11
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Enhanced formula for index
      const index =
        (Math.pow(day, 3) +
          Math.pow(month, 2) * year +
          Math.pow(hours, 2) * minutes +
          day * hours +
          month * minutes +
          year) %
        maps.length;
      return index;
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
