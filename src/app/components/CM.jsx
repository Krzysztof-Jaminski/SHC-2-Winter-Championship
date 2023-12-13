"use client";
import React, { useEffect, useState } from "react";
import MapCard from "./MapCard";
import maps from "./maps"; // Ensure this is the correct path to your maps array

const CM = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [recentMaps, setRecentMaps] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [playerOrder, setPlayerOrder] = useState("Upper player first"); // Default value
  const [mapPosition, setMapPosition] = useState("Left/Upper"); // Default value

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

    if (savedMap && currentTime - savedMap.timestamp < 480000) {
      // 480000 ms = 8 minutes
      setSelectedMap(savedMap.map);
      setRecentMaps(savedMap.recentMaps || []);
      setTimeLeft(
        Math.round((480000 - currentTime + savedMap.timestamp) / 1000)
      ); // Convert to seconds
      setPlayerOrder(savedMap.playerOrder);
      setMapPosition(savedMap.mapPosition);
    } else {
      selectRandomMap();
    }
  };

  const selectRandomMap = () => {
    let randomMap;
    do {
      randomMap = maps[Math.floor(Math.random() * maps.length)];
    } while (
      recentMaps.includes(randomMap.mapName) &&
      maps.length > recentMaps.length
    );

    const updatedRecentMaps = [randomMap.mapName, ...recentMaps].slice(0, 8);
    const newPlayerOrder =
      Math.random() < 0.5 ? "Upper player first" : "Down player first";
    const newMapPosition = Math.random() < 0.5 ? "Left/Upper" : "Right/Down";
    const mapData = {
      map: randomMap,
      timestamp: new Date().getTime(),
      recentMaps: updatedRecentMaps,
      playerOrder: newPlayerOrder,
      mapPosition: newMapPosition,
    };

    localStorage.setItem("selectedMap", JSON.stringify(mapData));
    setSelectedMap(randomMap);
    setRecentMaps(updatedRecentMaps);
    setTimeLeft(480); // 8 minutes in seconds
    setPlayerOrder(newPlayerOrder);
    setMapPosition(newMapPosition);
  };

  const handleMapClick = () => {
    if (timeLeft > 0) return; // Disable map change if timer is not expired
    selectRandomMap();
  };

  return (
    <div className="text-center mt-12">
      <h3>Random Map and Player Generator</h3>
      <div onClick={handleMapClick} className="cursor-pointer">
        {selectedMap ? (
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
            <p>Player Order: {playerOrder}</p>
            <p>Map Position: {mapPosition}</p>
          </>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default CM;
