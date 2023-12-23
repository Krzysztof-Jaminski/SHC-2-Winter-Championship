"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps"; // Ensure this is the correct path to your maps array

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const pseudoRandom = (seed, max) => {
      let value = (seed * 9301 + 49297) % 233280; // Simple PRNG
      return Math.floor((value / 233280) * max);
    };

    const getCurrentSeed = () => {
      const now = new Date();
      const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      const minutesSinceStartOfDay = Math.floor((now - startOfDay) / 60000);
      return Math.floor(minutesSinceStartOfDay / 15); // Change seed every 15 minutes
    };

    const getMapIndex = () => {
      return pseudoRandom(getCurrentSeed(), maps.length);
    };

    const calculateTimeLeft = () => {
      const now = new Date();
      const nextChange = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes() - (now.getMinutes() % 15) + 15,
        0
      );
      return Math.ceil((nextChange - now) / 1000);
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
          <>
            <a
              href={selectedMap.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapCard
                imgUrl={selectedMap.imgUrl}
                mapName={selectedMap.mapName}
                rules={selectedMap.rules}
              />
            </a>
            <p>Time until next map: {timeLeft} seconds</p>
          </>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default CM;
