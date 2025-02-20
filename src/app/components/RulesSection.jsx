"use client";
const RulesSection = () => {
  return (
    <section id="rules" className="text-white container mx-auto px-12 py-4">
      <h2 className="blue-gradient-text text-4xl font-bold mb-4">Rules</h2>

      <h3 className="cool-gradient-text text-xl font-bold">
        Tournament Structure:
      </h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          Players choose from a set list of maps, each with assigned rules.
        </li>
        <li>
          Each player plays two games against every other player—one on their
          chosen map and one on their opponents. ( double round-robin format)
        </li>
        <li>
          If a game exceeds <strong>70 days after the peace period</strong>, it
          is considered a draw. The game ends when a lord dies.
        </li>
        <li>
          Players accumulate points, and the <strong>top 4</strong> advance to
          the semifinals and finals.
        </li>
        <li>
          Semifinals and finals follow the same rules but have a separate
          scoring table. Players compete in 4 games instead of 2. The time limit
          is <strong>45 days</strong>, and the player with the highest score in
          points wins the tournament.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">Game Settings:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          Either <strong>all-on</strong> or <strong>all-off</strong> settings.
        </li>
        <li>
          <strong>No catapults vs. units</strong>, unless explicitly allowed.
        </li>
        <li>
          <strong>
            Hussite wagons are allowed and always 250 army limit and 100
            buildings, always add 0,1,2 AI to match the limits, unless it is not
            possible then use human watchers
          </strong>
        </li>
        <li>
          Games don’t need to be streamed unless they are controversial or
          crucial.
        </li>
        <li>
          Each game must be hosted by a <strong>watcher/streamer</strong> who
          starts the match. It does not have to be an official watcher it is
          enough to have confirmation from both players and the watcher
          regarding the maps, game results, and a screenshot of the end screen.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">General Rules:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          <strong>No glitches</strong> (full list available on the Winter 2024
          tournament website).
        </li>
        <li>
          Admins always have the final say. If you are unsure,{" "}
          <strong>ask before doing</strong> anything.
        </li>
      </ul>
    </section>
  );
};

export default RulesSection;
