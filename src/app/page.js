'use client';

import { useState } from 'react';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import VideoShowcase from "./components/VideoShowcase";
import TournamentInfoSection from "./components/TournamentInfoSection";
import PlayersSection from "./components/PlayersSection";
import TournamentNews from "./components/TournamentNews";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import RulesSection from "./components/RulesSection";
import MapsSection from "./components/MapsSection";
import LeaderboardsSection from "./components/LeaderboardsSection";

export default function Home() {
  const [isInVideoSection, setIsInVideoSection] = useState(true);

  const handleVideoSectionChange = (inVideoSection) => {
    setIsInVideoSection(inVideoSection);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar isHidden={isInVideoSection} />
        <VideoShowcase onVideoSectionChange={handleVideoSectionChange} />
        <div className="container mt-10 mx-auto px-0 py-0">
          <HeroSection />
          <AchievementsSection />
          <RulesSection />
          <MapsSection />
          <TournamentNews />
        </div>
        <Footer />
      </main>
    </>
  );
}
