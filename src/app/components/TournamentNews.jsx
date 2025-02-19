import React from "react";
import MapCard from "./MapCard";
import CM from "./CM";

const NewsSection = () => {
  return (
    <section id="news" className="text-white container mx-auto px-12 py-12">
      <p className="py-6">&nbsp;</p>
      {/* Tournament Starts */}
      <h2 className="blue-gradient-text text-4xl font-bold mb-8 text-center">
        Tournament News
      </h2>
      <p className="py-6">&nbsp;</p>

      {/* Announcement */}
      <h3 className="text-2xl font-bold text-center mb-4">
        Website Launch & Recruitment Open!
      </h3>
      <p className="text-lg mb-2">
        The website launches on <strong>February 19, 2025</strong>, and
        recruitment begins!
      </p>
      <p className="text-lg mb-2">
        Recruitment will stay open throughout the tournament until the
        semifinals. The format will be a<strong> double round-robin</strong>,
        where everyone plays against each other twice, and points are counted.
      </p>
      <p className="text-lg mb-2">
        To sign up, send a private message or join here and post your nickname:
        <a
          href="https://steamcommunity.com/chat/invite/YV59wIF4"
          target="_blank"
          className="text-blue-400 underline"
        >
          Link
        </a>
      </p>
      <p className="text-lg mb-2">
        Reminder: This time, games <strong>can but don’t have to</strong> be
        streamed. You can also play with an unofficial watcher.
      </p>
      <p className="text-lg mb-2">
        Matches are expected to start on <strong>February 21, 2025</strong>,
        though the date might change. The estimated duration is around
        <strong> two - three weeks</strong>.
      </p>
      <p className="text-lg">
        Anyone can stream the games and be watcher, but the official streamers
        for now are <strong>Letonetma</strong> and <strong>Chezzi</strong>,
        helpers: <strong>PegaSuS22</strong>, <strong>CasusObliquus</strong>
      </p>

      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
    </section>
  );
};

export default NewsSection;
