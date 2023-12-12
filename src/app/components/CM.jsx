"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "./maps"; // Ensure this is the correct path to your maps array

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [playerOrder, setPlayerOrder] = useState("");

  useEffect(() => {
    checkAndUpdateMap();
    const interval = setInterval(() => {
      checkAndUpdateMap();
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const checkAndUpdateMap = () => {
    const savedMapData = localStorage.getItem("selectedMap");
    const savedMap = savedMapData ? JSON.parse(savedMapData) : null;
    const currentTime = new Date().getTime();

    if (savedMap && currentTime - savedMap.timestamp < 300000) {
      // 300000 ms = 5 minutes
      setSelectedMap(savedMap.map);
      setTimeLeft(
        Math.round((300000 - currentTime + savedMap.timestamp) / 1000)
      ); // Convert to seconds
      generatePlayerOrder();
    } else {
      selectRandomMap();
    }
  };

  const selectRandomMap = () => {
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    const mapData = { map: randomMap, timestamp: new Date().getTime() };
    localStorage.setItem("selectedMap", JSON.stringify(mapData));
    setSelectedMap(randomMap);
    setTimeLeft(300); // 5 minutes in seconds
    generatePlayerOrder();
  };

  const handleMapClick = () => {
    if (timeLeft > 0) return; // Disable map change if timer is not expired
    selectRandomMap();
  };

  const generatePlayerOrder = () => {
    const order =
      Math.random() < 0.5 ? "Upper player first" : "Down player first";
    setPlayerOrder(order);
  };

  return (
    <div className="text-center mt-12">
      <h3>Random Map Generator</h3>
      <div onClick={handleMapClick} className="cursor-pointer">
        {selectedMap && (
          <>
            <MapCard
              imgUrl={selectedMap.imgUrl}
              mapName={selectedMap.mapName}
              rules={selectedMap.rules}
              steamUrl={selectedMap.steamUrl}
            />
            <p>
              {timeLeft > 0
                ? `Time until next map: ${timeLeft} seconds`
                : "Click to get a new map!"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CM;
