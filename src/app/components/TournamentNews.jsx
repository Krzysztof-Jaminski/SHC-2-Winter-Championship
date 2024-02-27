import React from "react";
import MapCard from "./MapCard";
import CM from "./CM";

const NewsSection = () => {
  return (
    <section
      id="TournamentNews"
      className="text-white container mx-auto px-12 py-12"
    >
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Tournament Starts */}
      <h2 className="blue-gradient-text text-4xl font-bold mb-8 text-center">
        Tournament News
      </h2>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>

      <div className="text-center  mt-12">
        <strong>Random map and rules selector use for tournament games!</strong>
        <CM></CM>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="cool-gradient-text text-md font-bold">
          Comprehensive Match Results
        </p>
        <p></p>
        <div className="container mx-auto mt-4 text-center">
          {/* Matches from previous discussions */}
          <p className="mt-4"> Final Group Stage games:</p>
          <p className="mt-4">
            <strong>Hawt vs Ahmed</strong> 3-0.5{" "}
            <a
              href="https://www.youtube.com/watch?v=iD5KdAq-CgA"
              target="_blank"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Ahmed vs Chezzi:</strong> 3-0{" "}
            <a
              href="https://www.youtube.com/watch?v=lLgPB7a2ZLs"
              target="_blank"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Letonetma vs Hakerxus :</strong> 3-1{" "}
            <a
              href="https://www.youtube.com/watch?v=6DdPM2fxiwo"
              target="_blank"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Hawt vs Thunder :</strong> 3-0
          </p>
          <p className="mt-4">
            <strong>Ahmed vs Falcon :</strong> 3-0
          </p>
          <p className="mt-4">
            <strong>Letonetma vs Ahmed:</strong> 3-1{" "}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_Ua3vHNIJy0"
              title="Letonetma vs Ahmed"
              frameborder="0"
              allowfullscreen
              className="mx-auto"
              style={{ display: "block" }}
            ></iframe>
            <a
              href="https://www.youtube.com/watch?v=_PAtne162Go"
              target="_blank"
            >
              Continuation
            </a>
          </p>
          <p className="mt-4">
            <strong>Letonetma vs Chezzi :</strong> 3-2{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=ZuIZlJ7j8yY"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Hakeruxs vs Hawt :</strong> 3-2{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=pKZfU6p8Be8"
            >
              Match Replay |
            </a>
            <a
              href="https://www.youtube.com/watch?v=YQYVJIkoJsQ"
              target="_blank"
            >
              | Continuation
            </a>
          </p>
          <p className="mt-4">
            <strong>Chezzi vs Falcon :</strong> 3-2{" "}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zpQ6H-xDWAc"
              title="Chezzi vs Falcon"
              frameborder="0"
              allowfullscreen
              className="mx-auto"
              style={{ display: "block" }}
            ></iframe>
          </p>
          <p className="mt-4"> ROUND 2,3,4 of the GROUP STAGE </p>
          <p className="mt-4">
            <strong>Hakeruxs vs Alexander Nevsky :</strong> 3-0{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=yU1d0_1073c"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Xeon vs Ahmed:</strong> 0-2{" "}
          </p>
          <p className="mt-4">
            <strong>Letonetma vs Ahmed:</strong> 2-1{" "}
          </p>
          <p className="mt-4">
            <strong>Xeon vs 惬意的紫色奶茶:</strong> 2-0{" "}
          </p>
          <p className="mt-4">
            <strong>Hawt vs CasusObliquus:</strong> 2-0{" "}
          </p>
          <p className="mt-4">
            <strong>AB vs 惬意的紫色奶茶:</strong> 1-2{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=EJeZjyRNBbY"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Vsratii Baron vs Alexander Nevsky :</strong> 1-2{" "}
            <a
              href="https://www.youtube.com/watch?v=f1-TDx6fjXU"
              target="_blank"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Vsratii Baron vs Elik :</strong> 2-0{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=zXGumZcdFVw"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>FAORS vs Illyrian :</strong> 2-1{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=fYZxdQ9bifI"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Alexander Nevsky vs Stalin :</strong> 2-0{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=UHtdRVfsDGo"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Xeon vs Chezii :</strong> 0-2
          </p>
          <p className="mt-4">
            <strong>Xeon vs Albercikk :</strong> 0-2{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=jJUQRIXHTXM"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Xeon vs Protagonist :</strong> 2-0 -{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=r_sV-wI36oc&t=1836s"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>CasusObliquus vs Illyrian :</strong> 2-0 -{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=-xiOoCzIJCk&t=3647s"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Rudra vs Vsratii Baron :</strong> 0-2
          </p>
          <p className="mt-4">
            <strong>Hakerxus vs Stalin:</strong> 2-0 -{" "}
            <a target="_blank" href="">
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Albercikk vs Chezii:</strong> 2-1 -{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=5X68FfNgJSw"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Letonetma vs AB:</strong> 2-0 - <a href="">Match Replay</a>
          </p>
          <p className="mt-4"> ROUND 1 GROUP STAGE </p>
          <p className="mt-4">
            <strong>Xeon vs Lawrence:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Hakerxus vs Rudra:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Stalin vs Vsratii Baron:</strong> 2-0 -{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=oC7KuWLpiGQ&t=6694s"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Jedi vs Alexander Nevsky:</strong> 2-1 -{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=eWfSJEPzhPY&t=1309s"
            >
              Match Replay
            </a>
          </p>
          <p className="mt-4">
            <strong>Elik vs Nil:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Hawt vs FAORS:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Thunder vs Spartacus:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>CasusObliquus vs Apithos:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Illyrian vs Godofstrategy:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Albercikk vs Falcon:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Chezzi vs Dodorus:</strong> 2-0 -{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=ajuBut3cbZQ&t=2648s"
            >
              Match Replay
            </a>
          </p>
          {/* Matches from the provided group */}
          <p className="mt-4">
            <strong>Letonetma vs RockLee:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>AB vs Superfly:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Ahmed vs Yoda:</strong> 2-0
          </p>
          <p className="mt-4">
            <strong>Asluk vs 惬意的紫色奶茶:</strong> 2-1
          </p>
        </div>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
      </div>

      <div className="text-center mt-12">
        <p className="cool-gradient-text text-xl font-bold">
          12.12.2023: Championship Games Start
        </p>
        <p className="mt-4">
          <strong>Participants in Each Group:</strong>
          <br />
          <strong>Group A:</strong> Hawt, Thunder, CasusObliquus, Illyrian,
          FAORS, Spartacus, Apithos, Godofstrategy
          <br />
          <strong>Group B:</strong> Hakerxus, Stalin, Jedi, Nil, Rudra, Vsratii
          Baron, Alexander Nevsky, Elik || Professor
          <br />
          <strong>Group C:</strong> Letonetma, AB, Ahmed, Asluk, RockLee,
          Superfly, Yoda, 惬意的紫色奶茶
          <br />
          <strong>Group D:</strong> Albercikk, Chezzi, Itachi Ucheha, Lawrence,
          Xeon, Falcon, Dodorus, Protagonist
        </p>

        <p className="mt-4">
          <strong>Game Format:</strong> Best-of-3 in group stages. Players
          select maps from our website for the first two games, each player
          select 1 map. Ties are decided by a random map generator.
        </p>
        <p className="mt-4">
          <strong>Finalist bracket </strong>( also the finals in group stage )
          est-of-5 in group stages. Players select maps from our website for the
          first two games, each player select 1 map. Ties are decided by a
          random map generator.
        </p>
        <p className="mt-4">
          <strong>Streaming Team:</strong> Hakeruxs, Vladimir, SD7804, Vsratii
          Baron, Murmelus.
        </p>
      </div>

      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Registration News */}
      <div className="text-center">
        <p className="cool-gradient-text text-xl font-bold">
          24.11.2023: Registration Opens
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
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* New Challenge Announcement */}
      <div className="text-center mt-12">
        <p className="cool-gradient-text text-xl font-bold">
          23.11.2023: New Challenge for Registered Players
        </p>
        <p className="text-lg mt-4 mb-6">
          A new challenge awaits! Players already registered and anyone wanting
          to train on a hard map can try Castle defence map. Check it out!
        </p>
        <MapCard
          imgUrl="images/TheCastle.jpg"
          mapName="Castle Challenge"
          rules="A challenging map for skilled players. No specific rules, just survival."
          steamUrl="https://steamcommunity.com/sharedfiles/filedetails/?id=3090952671"
        />
      </div>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Web Starts*/}
      <div className="space-y-12">
        <div className="text-center">
          <p className="cool-gradient-text text-xl font-bold">
            20.11.2023 The Website has been launched!
          </p>
          <p className="text-lg mt-4 mb-6">
            The official website for the Crusader 2 Winter Championship has been
            launched. Website made by Letonetma, The Creator of Maps and Rules:
            Hawt. Streamers: Vladimir, Baron. If you want to stream games or
            help in any other ways, contact us on steam
          </p>
        </div>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
      </div>

      {/* Other News */}
      {/* ... */}
    </section>
  );
};

export default NewsSection;
