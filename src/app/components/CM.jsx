"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps";

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  // List of 100 city UTC offsets
  const cityOffsets = [
    0, -5, -8, 1, 2, 3, 5.5, 8, 9, 10, -3, -7, 4, -4, -6, 5.75, 7, 3.5, -9, -10,
    -11, 12, 13, 14, -12, -1, 3.25, 4.5, 6, 6.5, 7.5, 8.75, -2, 9.5, 10.5, 11,
    -3.5, 0.5, 1.5, 2.5, 3.75, 4.25, 4.75, 5.25, 5.75, 6.25, 6.75, 7.25, 7.75,
    8.5, 8.25, 9.25, 9.75, 10.25, 10.75, 11.5, 11.75, -1.5, -2.5, -4.5, -5.5,
    -7.5, -8.5, -9.5, 12.75, 13.75, 14.75, -12.75, -13.5, -14, 2.25, 2.75, 3.25,
    3.75, -3.25, -3.75, -4.25, -4.75, -5.25, -5.75, -6.25, -6.5, -6.75, -7.25,
    -7.75, -8.25, -8.75, -9.25, -9.75, -10.25, -10.5, -10.75, -11.25, -11.5,
    -11.75, 0.25, 0.75, 1.25, 1.75, 2.25, 2.5, 2.75, 3.25, 3.5, 3.75,
  ];

  useEffect(() => {
    const pseudoRandom = (seed, max) => {
      let value = (seed * 9301 + 49297) % 233280; // Simple PRNG
      return Math.floor((value / 233280) * max);
    };

    const getCurrentSeed = () => {
      const now = new Date();

      // Convert current UTC time to hours and minutes
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();

      // Calculate the 'current time' in hours for 100 cities and multiply them together
      let seed = 1;
      cityOffsets.forEach((offset) => {
        // Calculate the time in this city
        const cityTime = new Date(now.getTime() + offset * 3600 * 1000);
        const cityHours = cityTime.getUTCHours() + cityTime.getUTCMinutes(); // Get hours in 24-hour format
        seed = (seed * cityHours) % 233280;
      });

      // Combine with UTC minutes for additional variability
      return (seed * utcMinutes) % 233280;
    };

    const getMapIndex = () => {
      // Only change the seed every 15 minutes
      const seed = Math.floor(getCurrentSeed() / 15);
      return pseudoRandom(seed, maps.length);
    };

    const calculateTimeLeft = () => {
      const now = new Date();
      const minutes = now.getUTCMinutes();
      const nextInterval = 15 - (minutes % 15);
      const seconds = now.getUTCSeconds();
      return nextInterval * 60 - seconds; // Time until the next 15 minute interval in seconds
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
