import React from "react";

const Row = ({ children, classNames }) => {
  return (
    <section className={classNames}>
      <article className="row">
        <ul>{children}</ul>
      </article>
    </section>
  );
};

const MoreContent = ({ children }) => {
  return (
    <ul className="more-content">
      <li>{children}</li>
    </ul>
  );
};

const Entry = ({ text }) => {
  return <li>{text}</li>;
};

const SportRow = () => {
  return (
    <main className="row title">
      <ul>
        <Entry text="Name" />
        <Entry text="Position" />
        <Entry text="Won Matches" />
        <Entry text="Lost Matches" />
        <Entry text="W/L Games" />
      </ul>
    </main>
  );
};

const Table = () => {
  return (
    <div className="wrapper">
      <SportRow />
      {/* Player 1 */}
      <Row classNames="nfl">
        <Entry
          text={
            <a
              href="https://www.youtube.com/channel/UCejxP2QqmJTccwH5XwgK2zg"
              target="_blank"
              style={{ color: "rgba(212, 130, 15)" }}
            >
              Letonetma
            </a>
          }
        />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <MoreContent>
          The victor is not victorious if the vanquished does not consider
          himself so!
        </MoreContent>
      </Row>
      {/* Player 2 */}
      <Row classNames="mlb">
        <Entry
          text={
            <a
              href="https://www.youtube.com/@hakerxus3968"
              target="_blank"
              style={{ color: "rgba(13, 163, 31)" }}
            >
              Hakerxus
            </a>
          }
        />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <MoreContent>----</MoreContent>
      </Row>
      {/* Player 3 */}
      <Row classNames="nfl">
        <Entry
          text={
            <a
              href="https://www.youtube.com/watch?v=H0nS2Fl9b8s"
              target="_blank"
              style={{ color: "rgba(82, 210, 154, 1)" }}
            >
              Hawt
            </a>
          }
        />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <MoreContent>Samunia</MoreContent>
      </Row>
      {/* Player 4 */}
      <Row classNames="mlb">
        <Entry
          text={
            <a
              href="https://www.youtube.com/@ahmedg431"
              style={{ color: "rgba(219, 13, 13)" }}
              target="_blank"
            >
              Ahmed
            </a>
          }
        />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <Entry text="-" />
        <MoreContent>---</MoreContent>
      </Row>
      {/* Player 5 */}
      <Row classNames="nfl">
        <Entry
          text={
            <a
              href="https://steamcommunity.com/profiles/76561198992869879/"
              style={{ color: "rgba(79, 192, 210, 1)" }}
              target="_blank"
            >
              Chezzi
            </a>
          }
        />
        <Entry text="#5" />
        <Entry text="5" />
        <Entry text="3" />
        <Entry text="1.28" />
        <MoreContent>There are no losses. Only learnt lessons</MoreContent>
      </Row>
      {/* Player 6 */}
      <Row classNames="mlb">
        <Entry
          text={
            <a
              href="https://www.youtube.com/watch?v=zpQ6H-xDWAc&list=TLGGGrIhBtwmb1QyNjAyMjAyNA&t=1359s"
              target="_blank"
              style={{ color: "rgba(219, 219, 26)" }}
            >
              Falcon
            </a>
          }
        />
        <Entry text="#6" />
        <Entry text="3" />
        <Entry text="3" />
        <Entry text="1.33" />
        <MoreContent>
          In the realm of challenges, strength prevails.
        </MoreContent>
      </Row>
      {/* Player 7 */}
      <Row classNames="nfl">
        <Entry
          text={
            <a
              href="https://www.youtube.com/@Albert-gq4uy"
              style={{ color: "rgba(229, 37, 232)" }}
              target="_blank"
            >
              Albercikk
            </a>
          }
        />
        <Entry text="#7" />
        <Entry text="3" />
        <Entry text="2" />
        <Entry text="1.20" />
        <MoreContent>
          You are a realist, not a hypocrite, I knew it from the very beginning
        </MoreContent>
      </Row>
      {/* Player 8 */}
      <Row classNames="mlb">
        <Entry
          text={
            <a
              href="https://steamcommunity.com/profiles/76561199490755719"
              style={{ color: "rgba(108, 26, 196)" }}
              target="_blank"
            >
              Thunder
            </a>
          }
        />
        <Entry text="#8" />
        <Entry text="5" />
        <Entry text="3" />
        <Entry text="1.37" />
        <MoreContent>
          Dont get my attention, nothing to care about in that virtual world.
        </MoreContent>
      </Row>
    </div>
  );
};

export default Table;
