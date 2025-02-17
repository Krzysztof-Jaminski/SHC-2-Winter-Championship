"use client";
import React from "react";
import dynamic from "next/dynamic";
import Table from "./Table";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const playersCount = 8;
const mapsCount = 4;
const numberOfMatches = 0;

const achievementsList = [
  {
    metric: "Participants",
    value: playersCount.toString(),
  },
  {
    metric: "Maps",
    value: mapsCount.toString(),
  },
  {
    metric: "Games played",
    value: numberOfMatches.toString(),
  },
];

const AchievementsSection = () => {
  return (
    <div className=" sm:py-16 xl:px-16">
      <Table />
      <p className="py-2">&nbsp;</p>
    </div>
  );
};

export default AchievementsSection;
