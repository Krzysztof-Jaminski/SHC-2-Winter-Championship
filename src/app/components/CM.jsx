"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps"; // Ensure this is the correct path to your maps array

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const getMapIndex = () => {
      const londonTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/London" })
      );
      const dayStart = new Date(londonTime);
      dayStart.setHours(0, 0, 0, 0); // Set to start of the day
      const minutesSinceDayStart = (londonTime - dayStart) / 60000; // Milliseconds to minutes
      return Math.floor(minutesSinceDayStart / 10) % maps.length;
    };

    const setTimeLeftUntilNextUpdate = () => {
      const now = new Date();
      const nextUpdate = new Date(now);
      nextUpdate.setMinutes(
        nextUpdate.getMinutes() + 10 - (nextUpdate.getMinutes() % 10),
        0,
        0
      );
      return Math.ceil((nextUpdate - now) / 1000);
    };

    const updateMap = () => {
      setSelectedMap(maps[getMapIndex()]);
      setTimeLeft(setTimeLeftUntilNextUpdate());
    };

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let time = prevTime - 1;
        if (time <= 0) {
          updateMap();
          time = setTimeLeftUntilNextUpdate();
        }
        return time;
      });
    }, 1000);

    // Initial map selection and timer setup
    updateMap();

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
