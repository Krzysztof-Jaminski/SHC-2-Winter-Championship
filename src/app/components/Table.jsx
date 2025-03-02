import React from "react";

const players = [
  { name: "Hawt", won: 0, lost: 0, drawn: 0 },
  { name: "Letonetma", won: 2, lost: 0, drawn: 0 },
  { name: "Hakerxus", won: 0, lost: 0, drawn: 0 },
  { name: "Ahmed/PegaSuS22", won: 0, lost: 0, drawn: 0 },
  { name: "Chezzi", won: 2, lost: 0, drawn: 0 },
  { name: "AB", won: 0, lost: 0, drawn: 0 },
  { name: "Xeon", won: 0, lost: 0, drawn: 0 },
  { name: "Lightning", won: 0, lost: 0, drawn: 0 },
  { name: "Stalin", won: 0, lost: 2, drawn: 0 },
  { name: "CasusObliquus", won: 0, lost: 0, drawn: 0 },
  { name: "ILLYRIAN", won: 2, lost: 4, drawn: 0 },
  { name: "nsvsochi", won: 0, lost: 0, drawn: 0 },
  { name: "Gioni", won: 0, lost: 0, drawn: 0 },
];

const specialColors = ["#8A2BE2", "#8A2BE2", "#7B68EE", "#7B68EE"]; // Niebiesko-fioletowe

// Sort players by points: points = wins + 0.5 * draws
const sortedPlayers = [...players].sort((a, b) => {
  const aPoints = a.won + 0.5 * a.drawn;
  const bPoints = b.won + 0.5 * b.drawn;
  return bPoints - aPoints; // Sort descending
});

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

const Table = () => {
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
            {/* Display position and points together in one column */}
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

export default Table;
