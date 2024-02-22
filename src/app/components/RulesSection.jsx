"use client";
const RulesSection = () => {
  return (
    <section id="rules" className="text-white container mx-auto px-12 py-4">
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <h2 className="blue-gradient-text text-4xl font-bold mb-4">
        Tournament Rules
      </h2>

      <p className="text-lg mb-4">
        Welcome to the Crusader 2 Championship, curated by Hawt. Here are the
        key rules and guidelines for participants:
      </p>

      <h3 className="cool-gradient-text text-xl font-bold">
        Tournament Structure:
      </h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          The tournament begins with four separate double elimination brackets,
          each starting with eight players.
        </li>
        <li>
          The finals of each bracket form the first set of games in the final
          bracket, which also features eight players.
        </li>
        <li>
          In case a player is unable to participate, their spot can be taken by
          others who still wish to compete, including those who have already
          been eliminated from the tournament. However, this rule does not apply
          in the final bracket.
        </li>
        <li>
          Each match in the tournament is a best-of-three format. The first two
          games are chosen by the players from a specific list of maps/rules
          available on the website. The final game, if necessary, will be set
          according to rules posted in the Tournament News section on the
          website for each round.
        </li>
        <li>
          In Final Bracket each match is best-of-five, where each player select
          only 1 map and 3 are random, draws in all cases can be taken and they
          are giving 1 point per both, rather then 0.5.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">Game Settings:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>All On means all settings in the game are allowed.</li>
        <li>All Off means all settings in the game are turned off.</li>
        <li>
          If a map has its own specific rules, these override the general rules.
          (Map rules have higher priority than General Rules)
        </li>
        <li>
          Streamer/Watcher IS ALWAYS HOST, the players are NOT ALLOWED to HOST
          their games, due to advantage of the host
        </li>
        <li>
          To fullfill the limits of army and buildings watcher/streamer can not
          kill his lord + has to add additonal AI players as watchers to
          unplayable positions that are made on each map
        </li>
        <li>
          The nobuynosell rule indicates that buying and selling are not
          allowed.
        </li>
        <li>
          Catapults against troops are not allowed unless explicitly permitted
          in the rules.
        </li>
        <li>
          The use of Balista 1 hit and Long Trebs Bug is permitted unless
          explicitly disallowed in the map-specific rules.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">General Rules:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          All tricks and bugs that are not explicitly banned are allowed. Feel
          free to be creative; what is not banned is legal.
        </li>
        <li>
          Participants are expected to maintain fair play and sportsmanship
          throughout the tournament.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">
        Banned Bugs and Limitations:
      </h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          If there is no information about army/buildings limits they are 333
          133
        </li>
        <li>No Army protection boosting without special units around</li>
        <li>No Tower Bug.</li>
        <li>No Asasins moves into enemy space in peace time allowed</li>
        <li>
          No blocking neutral resources, nor taking more then your half in peace
          time allowed, later on it is allowed
        </li>
        <li>No Long Shooters (long fire bombers).</li>
        <li>
          Limiting the amount of barricades is recommended but not enforced.
        </li>
        <li>No free stone walls.</li>
        <li>
          <em>
            Disclaimer: If you re not familiar with a specific bug, feel free to
            inquire. However, if you don t know about it, you likely don t use
            it in your gameplay.
          </em>
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">Match Oversight:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          For top games that are streamed, a watcher will be required to ensure
          fair play.
        </li>
        <li>
          In the initial phases of the tournament, a screenshot of your victory
          is sufficient for validation. Alternatively, you can appoint a watcher
          to verify your win.
        </li>
      </ul>

      <p className="text-lg">
        We encourage all participants to familiarize themselves with these rules
        to ensure a smooth and enjoyable tournament experience. Good luck to all
        competitors!
      </p>
    </section>
  );
};

export default RulesSection;
