import React from "react";

const NewsSection = () => {
  const recentGames = [
    {
      player1: "Hakerxus",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Mars",
      date: "31.03.2025",
    },
    {
      player1: "Hakerxus",
      player2: "Letonetma",
      winner: "Hakerxus",
      map: "Siamese",
      date: "31.03.2025",
    },
    {
      player1: "Hakerxus",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Hakerxus-Archer Map",
      date: "31.03.2025",
    },
    {
      player1: "Hakerxus",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Colloseum",
      date: "31.03.2025",
    },
    {
      player1: "Chezzi",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Siamese",
      date: "31.03.2025",
    },
    {
      player1: "Chezzi",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "600 0",
      date: "31.03.2025",
    },
    {
      player1: "Chezzi",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Cauldon",
      date: "16.03.2025",
    },
    {
      player1: "Chezzi",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Colloseum",
      date: "16.03.2025",
    },
    {
      player1: "PegaSuS22",
      player2: "AB",
      winner: "PegaSuS22",
      map: "Mountain Pass",
      date: "10.03.2025",
    },
    {
      player1: "PegaSuS22",
      player2: "AB",
      winner: "PegaSuS22",
      map: "Siamese",
      date: "10.03.2025",
    },
    {
      player1: "Lightning",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Mountain Range",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Mars",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "PegaSuS22",
      winner: "PegaSuS22",
      map: "Hakerxus-Archer Map",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "PegaSuS22",
      winner: "PegaSuS22",
      map: "Mountain Pass",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Mars",
      date: "03.03.2025",
    },
    {
      player1: "Lightning",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Hakerxus-Archer Map",
      date: "03.03.2025",
    },
    {
      player1: "AB",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Mars",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Land Of Chivalry",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Hakerxus-Archer Map",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Large Clover",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Mars",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Hakerxus-Archer Map",
      date: "02.03.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Hakerxus-Archer Map",
      date: "02.03.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Cauldon",
      date: "02.03.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Large Clover",
      date: "23.02.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Hakerxus-Archer Map",
      date: "23.02.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "STALIN",
      winner: "ILLYRIAN",
      map: "Hakerxus-Archer Map",
      date: "22.02.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "STALIN",
      winner: "ILLYRIAN",
      map: "Mars",
      date: "22.02.2025",
    },
  ];

  return (
    <section id="news" className="text-white container mx-auto px-12 py-12">
      <p className="py-6">&nbsp;</p>
      <h2 className="blue-gradient-text text-4xl font-bold mb-8 text-center">
        Tournament News
      </h2>
      <p className="py-6">&nbsp;</p>

      <h3 className="text-2xl font-bold text-center mb-4">
        First Stage of the Tournament Concluded!
      </h3>
      <ul className="text-lg mb-2 list-disc pl-6">
        <li>
          The first stage of the tournament has officially ended on{" "}
          <strong>March 22, 2025</strong>. Players who did not play any matches,
          despite joining the tournament, have been penalized with 1 loss for
          each active player who participated in at least one match. This
          ensures fair competition for all involved.
        </li>
        <li>
          Additionally, due to technical reasons, the map{" "}
          <strong>Large Clover</strong> has been replaced with{" "}
          <strong>Fernir</strong>.
        </li>
        <li>
          The draw time has been standardized to <strong>60 days</strong> after
          the end of the peace time for all games.
        </li>
        <li>
          <strong>Siamese</strong> rules has been changed.
        </li>
        <li>
          We wish all players the best of luck in the next stage! Keep up the
          great work!
        </li>
      </ul>

      <p className="py-6">&nbsp;</p>

      <h3 className="text-2xl font-bold text-center mb-4">
        Website Launch & Recruitment Open!
      </h3>
      <ul className="text-lg mb-2 list-disc pl-6">
        <li>
          The website launches on <strong>February 19, 2025</strong>, and
          recruitment begins!
        </li>
        <li>
          Recruitment will stay open throughout the tournament until the
          semifinals. The format will be a <strong>double round-robin</strong>,
          where everyone plays against each other twice, and points are counted.
        </li>
        <li>
          To sign up, send a private message or join here and post your
          nickname:
          <a
            href="https://steamcommunity.com/chat/invite/d8meFu7z"
            target="_blank"
            className="text-blue-400 underline"
          >
            Link
          </a>
        </li>
        <li>
          Reminder: This time, games <strong>can but don’t have to</strong> be
          streamed. You can also play with an unofficial watcher.
        </li>
        <li>
          Matches are expected to start on <strong>February 22, 2025</strong>.
        </li>
        <li>
          Organizers: <strong>Letonetma</strong> and <strong>PegaSuS22</strong>
        </li>
      </ul>

      <p className="py-6">&nbsp;</p>

      <p className="py-6">&nbsp;</p>

      {/* Recent Games Section */}
      <h3 className="text-2xl font-bold text-center mb-4">Recent Games</h3>
      <table className="w-full border border-white text-lg text-center">
        <thead>
          <tr>
            <th className="border border-white px-4 py-2">Player 1</th>
            <th className="border border-white px-4 py-2">Player 2</th>
            <th className="border border-white px-4 py-2">Winner</th>
            <th className="border border-white px-4 py-2">Map</th>
            <th className="border border-white px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {recentGames.map((game, index) => (
            <tr key={index}>
              <td className="border border-white px-4 py-2">{game.player1}</td>
              <td className="border border-white px-4 py-2">{game.player2}</td>
              <td className="border border-white px-4 py-2">{game.winner}</td>
              <td className="border border-white px-4 py-2">{game.map}</td>
              <td className="border border-white px-4 py-2">{game.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="py-6">&nbsp;</p>
    </section>
  );
};

export default NewsSection;
