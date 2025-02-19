"use client";
import React, { useState, useRef } from "react";

const PlayersSection = () => {
  const players = [
    "Letonetma",
    "Spartacus",
    "Albercikk",
    // Freespace
  ];

  return (
    <section id="players" className="container mx-auto px-12 py-4">
      <h2 className="blue-gradient-text">Players</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {players.map((player, index) => (
          <div key={index} className="cool-gradient-text text-center">
            {player}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayersSection;
