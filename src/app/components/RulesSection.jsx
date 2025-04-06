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
          Players choose from a set list of maps (1 and 0 peace time maps can
          not be choosen before semifinals) each with assigned rules, the
          position is chosen by the person who did not choose the map.
        </li>

        <li>
          Each player plays two games against every other player—one on their
          chosen map and one on their opponents. ( double round-robin format)
        </li>
        <li>
          Each map can only be selected once during the entire match of 2
          players (their 4 games)
        </li>
        <li>
          If a game exceeds <strong>60 days after the peace period</strong>, it
          is considered a draw. The game ends when a lord dies.
        </li>
        <li>
          Players accumulate points, and the <strong>top 4</strong> advance to
          the semifinals and finals.
        </li>
        <li>
          Semifinals and finals follow the same rules but have a separate
          scoring table. Players compete in 4 games instead of 2. Player with
          the highest score in points wins the tournament. If players
          participated in games in the previous stage, those games are already
          included in this stage.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">Game Settings:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          Either <strong>all-on</strong> or <strong>all-off</strong> settings.
        </li>
        <li>No tax rolling</li>
        <li>
          <strong>No catapults vs. units</strong>, unless explicitly allowed.
        </li>
        <li>
          <strong>Long treb bug is allowed.</strong>
        </li>
        <li>
          Removing/destroying markets outside the map is NOT ALLOWED, tower bug
          is allowed only in peace time (you can not build stone structures on
          units) you can always remove them from under units
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
