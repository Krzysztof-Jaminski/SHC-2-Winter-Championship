import React from "react";

const TournamentInfoSection = () => {
  return (
    <section className="text-white" id="tournament-info">
      <p className="py-6">&nbsp;</p>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="blue-gradient-text">
            Winter 2023 Crusader 2 Championship
          </h2>
          <p className="text-base lg:text-lg">
            The Crusader 2 Winter 2023 Championship is here! Curated by Hawk,
            the winner of the last major tournament, this event promises an
            enthralling experience with meticulously crafted maps and a robust
            set of rules.
          </p>
          <p className="text-base lg:text-lg mt-2">
            Featuring a double elimination system, the tournament is tailored
            for players of all skill levels - new, medium, and the best. This
            format ensures a fair and competitive environment, giving everyone a
            chance to prove their mettle.
          </p>
          <p className="text-base lg:text-lg mt-2">
            This championship introduces a series of new maps created
            specifically for the tournament, enhancing the challenge and
            excitement. The website was designed and developed by Letonetma,
            with Hawk and Letonetma serving as the principal architects of the
            tournament.
          </p>
          <p className="text-base lg:text-lg mt-2">
            We re joined by Albercikk, who will be assisting with streaming, but
            we are actively looking to expand our team of streamers and helpers.
            If you re interested in being a part of this exciting event, please
            reach out to us!
          </p>
          <p className="text-base lg:text-lg mt-2">
            For streams and videos of the tournament s most intense matches,
            keep an eye on the right side of this page. We will feature live
            coverage and highlights, showcasing the pinnacle of Crusader 2
            gameplay.
          </p>
          <p className="text-base lg:text-lg mt-2">
            Ready to join the fray? Registrations are now open! You can sign up
            for the tournament right here on our website or contact us on Steam
            for more information. Seize this opportunity to become a part of
            Crusader 2 history.
          </p>
        </div>
        <div className="video-container mt-4 md:mt-0 space-y-4">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/ZYkSP2e9a0Q"
            title="Tournament Game Live"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/sTelB76yJp0"
            title="Tournament Game Live 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TournamentInfoSection;
