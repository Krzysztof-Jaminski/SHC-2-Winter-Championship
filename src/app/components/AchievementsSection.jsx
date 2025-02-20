"use client";
import React from "react";
import Table from "./Table";
import SFTable from "./SFTable";

const AchievementsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      {/*<h2>Finals</h2>*/}
      {/*<SFTable />*/}
      <h2>Leaderboard & Participants</h2>
      <Table />
    </div>
  );
};

export default AchievementsSection;
