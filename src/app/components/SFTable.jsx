import React from "react";

const semifinalists = [
  { name: "Hakerxus", won: 1, lost: 3, drawn: 0 },
  { name: "Chezzi", won: 0, lost: 3, drawn: 0 },
  { name: "Letonetma", won: 5, lost: 1, drawn: 0 },
  { name: "PegaSuS22", won: 0, lost: 0, drawn: 0 },
];

const specialColors = ["#8A2BE2", "#8A2BE2", "#7B68EE", "#7B68EE"];

const sortPlayers = (playersList) => {
  return [...playersList].sort((a, b) => {
    const aPoints = a.won + 0.5 * a.drawn;
    const bPoints = b.won + 0.5 * b.drawn;
    return bPoints - aPoints;
  });
};

const Row = ({ children, className }) => (
  <section className={className}>
    <article className="row">
      <ul>{children}</ul>
    </article>
  </section>
);

const Entry = ({ text, color }) => (
  <li style={color ? { color } : {}}>{text}</li>
);

const SportRow = () => (
  <main className="row title">
    <ul>
      <Entry text="Position" />
      <Entry text="Points" />
      <Entry text="Won Games" />
      <Entry text="Drawn Games" />
      <Entry text="Lost Games" />
    </ul>
  </main>
);

const SFTable = () => {
  const sortedPlayers = sortPlayers(semifinalists);
  return (
    <div className="wrapper">
      <SportRow />
      {sortedPlayers.map((player, index) => {
        const points = player.won + 0.5 * player.drawn;
        return (
          <Row key={player.name}>
            <Entry
              text={`#${index + 1} ${player.name}`}
              color={index < 4 ? specialColors[index] : undefined}
            />
            <Entry text={points.toFixed(1)} />
            <Entry text={player.won} />
            <Entry text={player.drawn} />
            <Entry text={player.lost} />
          </Row>
        );
      })}
    </div>
  );
};

export default SFTable;
