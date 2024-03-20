"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import dataDoubleLastGameLower from "../../../public/data/dataDoubleLastGameLower.js";
import groupA from "../../../public/data/groupA.js";
import groupB from "../../../public/data/groupB.js";
import groupC from "../../../public/data/groupC.js";
import groupD from "../../../public/data/groupD.js";

const DoubleEliminationBracket = dynamic(
  () =>
    import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.DoubleEliminationBracket
    ),
  { ssr: false }
);

const Match = dynamic(
  () => import("@g-loot/react-tournament-brackets").then((mod) => mod.Match),
  { ssr: false }
);

const SVGViewer = dynamic(
  () =>
    import("@g-loot/react-tournament-brackets").then((mod) => mod.SVGViewer),
  { ssr: false }
);

// This variable will be set to true only on the client side
const isClient = typeof window === "object";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

const LeaderboardsSection = () => {
  const [width] = useWindowSize();
  const [theme, setTheme] = useState(null);
  const [themeA, setThemeA] = useState(null);
  const [themeB, setThemeB] = useState(null);
  const [themeC, setThemeC] = useState(null);
  const [themeD, setThemeD] = useState(null);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    // Dynamically import the createTheme function on the client side
    import("@g-loot/react-tournament-brackets").then(({ createTheme }) => {
      const GlootTheme = createTheme({
        textColor: {
          main: "#ffffff",
          highlighted: "#0b0d01",
          dark: "##8f8a7d",
        },
        matchBackground: { wonColor: "#f8fade", lostColor: "#eef1cd" },
        score: {
          background: {
            wonColor: `#efece3`,
            lostColor: "#efece3",
          },
          text: {
            highlightedWonColor: "#840a62",
            highlightedLostColor: "#04816b",
          },
        },
        border: {
          color: "#d6d4bc",
          highlightedColor: "#44453d",
        },
        roundHeader: { backgroundColor: "#c4c08c", fontColor: "#0b0d01" },
        connectorColor: "#a81289",
        connectorColorHighlight: "#a81289",
        svgBackground: "#a81289",
      });
      const GlootThemeA = createTheme({
        textColor: {
          main: "#ffffff",
          highlighted: "#0b0d01",
          dark: "##8f8a7d",
        },
        matchBackground: { wonColor: "#fbe9ef", lostColor: "#fbe9f2" },
        score: {
          background: {
            wonColor: `#efece3`,
            lostColor: "#efece3",
          },
          text: {
            highlightedWonColor: "#840a62",
            highlightedLostColor: "#04816b",
          },
        },
        border: {
          color: "#d6d4bc",
          highlightedColor: "#44453d",
        },
        roundHeader: { backgroundColor: "#c4c08c", fontColor: "#0b0d01" },
        connectorColor: "#a81289",
        connectorColorHighlight: "#a81289",
        svgBackground: "#a81289",
      });
      const GlootThemeB = createTheme({
        textColor: {
          main: "#ffffff",
          highlighted: "#0b0d01",
          dark: "##8f8a7d",
        },
        matchBackground: { wonColor: "#fbebe9", lostColor: "#fbe9e9" },
        score: {
          background: {
            wonColor: `#efece3`,
            lostColor: "#efece3",
          },
          text: {
            highlightedWonColor: "#840a62",
            highlightedLostColor: "#04816b",
          },
        },
        border: {
          color: "#d6d4bc",
          highlightedColor: "#44453d",
        },
        roundHeader: { backgroundColor: "#c4c08c", fontColor: "#0b0d01" },
        connectorColor: "#a81289",
        connectorColorHighlight: "#a81289",
        svgBackground: "#a81289",
      });
      const GlootThemeC = createTheme({
        textColor: {
          main: "#ffffff",
          highlighted: "#0b0d01",
          dark: "##8f8a7d",
        },
        matchBackground: { wonColor: "#f6fbee", lostColor: "#f4fbe9" },
        score: {
          background: {
            wonColor: `#efece3`,
            lostColor: "#efece3",
          },
          text: {
            highlightedWonColor: "#840a62",
            highlightedLostColor: "#04816b",
          },
        },
        border: {
          color: "#d6d4bc",
          highlightedColor: "#44453d",
        },
        roundHeader: { backgroundColor: "#c4c08c", fontColor: "#0b0d01" },
        connectorColor: "#a81289",
        connectorColorHighlight: "#a81289",
        svgBackground: "#a81289",
      });
      const GlootThemeD = createTheme({
        textColor: {
          main: "#ffffff",
          highlighted: "#0b0d01",
          dark: "##8f8a7d",
        },
        matchBackground: { wonColor: "#f8f1da", lostColor: "#f8e9da" },
        score: {
          background: {
            wonColor: `#efece3`,
            lostColor: "#efece3",
          },
          text: {
            highlightedWonColor: "#840a62",
            highlightedLostColor: "#04816b",
          },
        },
        border: {
          color: "#d6d4bc",
          highlightedColor: "#44453d",
        },
        roundHeader: { backgroundColor: "#c4c08c", fontColor: "#0b0d01" },
        connectorColor: "#a81289",
        connectorColorHighlight: "#a81289",
        svgBackground: "#a81289",
      });
      setTheme(GlootTheme);
      setThemeA(GlootThemeA);
      setThemeB(GlootThemeB);
      setThemeC(GlootThemeC);
      setThemeD(GlootThemeD);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  if (!theme) {
    return null;
  }

  const contentMaxWidth = 1200;
  const finalWidth = Math.min(width - 100, contentMaxWidth);
  const finalHeight = 650;

  return (
    <div id="leaderboards" className="leaderboards-section">
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>

      <div className="section main-winners mx-auto px-12">
        {/* Existing content */}
        {/* ... */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h3 className="blue-gradient-text text-3xl font-bold mb-4">
            Finalist Section, Bracket of winners from group stage
          </h3>
          <p></p>
          <h2 className="blue-gradient-text">
            Winter 2023 Crusader 2 Championship
          </h2>
          <p className="text-base lg:text-lg mt-2">
            In this year s Winter 2023 Crusader 2 Championship, we re excited to
            introduce a 32-player format, divided into four groups of eight
            players each. Within each group, the double elimination system plays
            a pivotal role in determining the top competitors.
          </p>

          <h3 className="cool-gradient-text text-xl font-bold mt-4">
            Initial Group Stages:
          </h3>
          <p className="text-base lg:text-lg mt-2">
            Each group of eight players follows the double elimination format.
            All players start in the main bracket and are paired for the first
            round of matches. Winners proceed in the winners bracket, and losers
            move to the losers bracket.
          </p>

          <h3 className="cool-gradient-text text-xl font-bold mt-4">
            Progression in Winners Bracket:
          </h3>
          <p className="text-base lg:text-lg mt-2">
            In the winners bracket, the succeeding rounds continue until two
            players reach the group finals. The player who wins this match is
            the first finalist from the group.
          </p>

          <h3 className="cool-gradient-text text-xl font-bold mt-4">
            Losers Bracket Dynamics:
          </h3>
          <p className="text-base lg:text-lg mt-2">
            Simultaneously, players in the losers bracket compete in parallel
            matches. This bracket filters out competitors until one player
            remains, who then faces off against the loser of the winners bracket
            final. The winner of this match becomes the second finalist from the
            group.
          </p>

          <h3 className="cool-gradient-text text-xl font-bold mt-4">
            Final Bracket Formation:
          </h3>
          <p className="text-base lg:text-lg mt-2">
            The top two players from each group s double elimination bracket, a
            total of eight players, advance to a new final bracket. This is also
            a double elimination bracket, ensuring a fair and balanced
            competition.
          </p>

          <h3 className="cool-gradient-text text-xl font-bold mt-4">
            Climax in the Final Bracket:
          </h3>
          <p className="text-base lg:text-lg mt-2">
            The final bracket, comprising the best from each group, follows the
            same double elimination format. No double Finals.
          </p>

          <p className="text-base lg:text-lg mt-2">
            By employing double elimination both in group stages and the final
            bracket, our tournament format ensures that every player has ample
            opportunity to compete and showcase their skills. The excitement
            intensifies as players navigate through the brackets, striving for a
            spot in the grand finals.
          </p>
        </div>
        <p className="py-6">&nbsp;</p>
        <h2 className="cool-gradient-text text-2xl font-bold mb-3">
          The Best 8, The Final Bracket:
        </h2>
        <div className="inverted-colors">
          <DoubleEliminationBracket
            matches={dataDoubleLastGameLower}
            matchComponent={Match}
            theme={theme}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer width={finalWidth} height={finalHeight} {...props}>
                {children}
              </SVGViewer>
            )}
          />
        </div>
      </div>
      <p className="py-6">&nbsp;</p>
      <div className="section group-a mx-auto px-12">
        <p>
          <h2 className="cool-gradient-text text-2xl font-bold mb-3">
            Group Stage Brackets:
          </h2>
        </p>
        <h3 className="cool-gradient-text text-2xl font-bold mb-3">Group A</h3>
        <p className="text-lg mb-4">
          Detailed view of Group A competition and standings.
        </p>
        <p></p>
        <div className="inverted-colors">
          <DoubleEliminationBracket
            matches={groupA}
            matchComponent={Match}
            theme={themeA}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer width={finalWidth} height={finalHeight} {...props}>
                {children}
              </SVGViewer>
            )}
          />
        </div>
      </div>
      <p className="py-6">&nbsp;</p>
      <div className="section group-b mx-auto px-12">
        <h3 className="cool-gradient-text text-2xl font-bold mb-3">Group B</h3>
        <p className="text-lg mb-4">
          Detailed view of Group B competition and standings.
        </p>
        <p></p>
        <div className="inverted-colors">
          <DoubleEliminationBracket
            matches={groupB}
            matchComponent={Match}
            theme={themeB}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer width={finalWidth} height={finalHeight} {...props}>
                {children}
              </SVGViewer>
            )}
          />
        </div>
      </div>
      <p className="py-6">&nbsp;</p>
      <div className="section group-a mx-auto px-12">
        <h3 className="cool-gradient-text text-2xl font-bold mb-3">Group C</h3>
        <p className="text-lg mb-4">
          Detailed view of Group C competition and standings.
        </p>
        <p></p>
        <div className="inverted-colors">
          <DoubleEliminationBracket
            matches={groupC}
            matchComponent={Match}
            theme={themeC}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer width={finalWidth} height={finalHeight} {...props}>
                {children}
              </SVGViewer>
            )}
          />
        </div>
      </div>
      <p className="py-6">&nbsp;</p>
      <div className="section group-a mx-auto px-12">
        <h3 className="cool-gradient-text text-2xl font-bold mb-3">Group D</h3>
        <p className="text-lg mb-4">
          Detailed view of Group D competition and standings.
        </p>
        <p></p>
        <div className="inverted-colors">
          <DoubleEliminationBracket
            matches={groupD}
            matchComponent={Match}
            theme={themeD}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer width={finalWidth} height={finalHeight} {...props}>
                {children}
              </SVGViewer>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardsSection;
