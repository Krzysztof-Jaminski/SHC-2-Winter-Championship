import React from "react";

const NewsSection = () => {
  return (
    <section
      id="TournamentNews"
      className="text-white container mx-auto px-12 py-12"
    >
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <h2 className="blue-gradient-text text-4xl font-bold mb-8 text-center">
        Tournament News
      </h2>

      {/* Spacing paragraphs */}
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <div className="text-center">
        <p className="cool-gradient-text text-xl font-bold">
          21.11.2023: Registration Opens
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

      <div className="space-y-12">
        <div className="text-center">
          <p className="cool-gradient-text text-xl font-bold">
            18.11.2023: Website Launch
          </p>
          <p className="text-lg mt-4">
            The official website for the Crusader 2 Winter Championship has been
            launched. Website made by Letonetma, The Creator of Mapset: Hawt ,
            Helpers in tournament: Albercikk, If you want to stream games or
            help in any other ways, contact us on steam
          </p>
        </div>

        {/* Additional news items with similar structure can be added here */}
      </div>

      {/* Additional spacing at the bottom if needed */}
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
    </section>
  );
};

export default NewsSection;
