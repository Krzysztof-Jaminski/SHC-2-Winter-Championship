import React from "react";
import MapCard from "./MapCard";

const NewsSection = () => {
  return (
    <section
      id="TournamentNews"
      className="text-white container mx-auto px-12 py-12"
    >
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <h2 className="blue-gradient-text text-4xl font-bold mb-8 text-center">
        Tournament News
      </h2>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Registration News */}
      <div className="text-center">
        <p className="cool-gradient-text text-xl font-bold">
          24.11.2023: Registration Opens
        </p>
        <p className="text-lg mt-4 mb-6">
          Registration for the tournament begins. Get ready to compete!
        </p>
        <a
          href="https://forms.gle/YZExVu4MqEm6nNEC9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg inline-block"
        >
          Register Now
        </a>
      </div>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* New Challenge Announcement */}
      <div className="text-center mt-12">
        <p className="cool-gradient-text text-xl font-bold">
          23.11.2023: New Challenge for Registered Players
        </p>
        <p className="text-lg mt-4 mb-6">
          A new challenge awaits! Players already registered and anyone wanting
          to train on a hard map can try Castle defence map. Check it out!
        </p>
        <MapCard
          imgUrl="images/TheCastle.jpg"
          mapName="Castle Challenge"
          rules="A challenging map for skilled players. No specific rules, just survival."
          steamUrl="https://steamcommunity.com/sharedfiles/filedetails/?id=3090952671"
        />
      </div>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Existing Challenge News */}
      <div className="space-y-12">
        <div className="text-center">
          <p className="cool-gradient-text text-xl font-bold">
            20.11.2023 The Website has been launched!
          </p>
          <p className="text-lg mt-4 mb-6">
            The official website for the Crusader 2 Winter Championship has been
            launched. Website made by Letonetma, The Creator of Maps and Rules:
            Hawt Helpers/Streamers in tournament: Albercikk, Stalin, Vladimir If
            you want to stream games or help in any other ways, contact us on
            steam
          </p>
        </div>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
      </div>

      {/* Other News */}
      {/* ... */}
    </section>
  );
};

export default NewsSection;
