"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "../../../public/data/maps";

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const moment = require("moment-timezone");

  const getPseudoRandomNumber = () => {
    const now = moment().tz("Europe/London");

    // Modified seed calculation: does not change every minute
    const seed =
      now.date() +
      now.month() +
      now.year() +
      Math.floor((now.hours() * 60) / 15);
    const numbers = Array.from({ length: maps.length }, (_, i) => i);

    // Shuffle the numbers array using the new seed
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = seed % (i + 1);
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Calculate the index based on London time
    const index =
      Math.floor((now.hours() * 60) / 15 + now.minutes() / 15) % maps.length;
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
