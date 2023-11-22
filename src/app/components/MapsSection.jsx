import MapCard from "./MapCard";
const MapsSection = () => {
  const maps = [
    {
      imgUrl: "./images/maps/Grasslandss.jpg",
      mapName: "Grasslandss",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3092096605",
      rules:
        "250 gold, medium goods, 5 peace, all on, no trebuchet bug, 100 build limit",
    },
    {
      imgUrl: "./images/maps/AroundTheVolcano.jpg",
      mapName: "Around the Volcano",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2999159228",
      rules: "500 gold, medium goods, 10 peace, all on, no trebuchets bug",
    },
    {
      imgUrl: "./images/maps/MountainRange.jpg",
      mapName: "Mountain Range",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2946124818",
      rules: "1k gold, high goods, 5 peace, all on, cata vs troops allowed",
    },
    {
      imgUrl: "./images/maps/DIS.jpg",
      mapName: "Death in the Sand",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3092102068",
      rules: "500 gold, low goods, 5 peace, all on",
    },
    {
      imgUrl: "./images/maps/TheColosseum.jpg",
      mapName: "The Colosseum",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3092086125",
      rules:
        "1k gold, very high goods, no peace, no burning cart, no trebuchets, no buy, 100 build limit",
    },
    {
      imgUrl: "./images/maps/Cauldron.jpg",
      mapName: "Cauldron",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3042564329",
      rules: "1k gold, medium goods, no peace, all on, cata vs troops allowed",
    },
    {
      imgUrl: "./images/maps/BarrenLands.jpg",
      mapName: "Barren Lands",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3092113828",
      rules: "7.5k gold, high goods, 10 pt, all on, no trebuchet bug",
    },
    {
      imgUrl: "./images/maps/DesertWinds.jpg",
      mapName: "Desert Winds",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3013753337",
      rules: "250 gold, no goods, 5 peace, all on",
    },
    {
      imgUrl: "./images/maps/DuelInTheMiddle.jpg",
      mapName: "Duel in the Middle (No Barricades)",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3039932229",
      rules:
        "1.5k gold, high goods, 10 peace, all on, no barricades, 100 build limit, catapults vs troops allowed",
    },
    {
      imgUrl: "./images/maps/Galatia.jpg",
      mapName: "Galatia",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3091954772",
      rules:
        "100 gold, very low goods, 15 peace, no burning carts, no barricades, no man traps, cata vs troops allowed",
    },
    {
      imgUrl: "./images/maps/IgiBalance.jpg",
      mapName: "Igi Balance (No Barricades)",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3013858348",
      rules:
        "1k gold, medium goods, 15 peace, all on, no barricades, 100 build limit",
    },
    {
      imgUrl: "./images/maps/Oasis.jpg",
      mapName: "Oasis",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3092109106",
      rules:
        "1.5k gold, medium goods, 15 pt, no trebuchets, no fire, no towers",
    },
    {
      imgUrl: "./images/maps/Mars1vs1With2Villages.jpg",
      mapName: "Mars 1vs1 with 2 Villages",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3092119159",
      rules:
        "7.5k gold, very high goods, 10 peace, all on, no buy weapons, 100 build limit 250 catapults vs troops allowed",
    },
    {
      imgUrl: "./images/maps/RushToTheVillages.jpg",
      mapName: "Rush to the Villages",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3016653093",
      rules: "7.5k gold, very high goods, all on, 5 peace, no barricades",
    },
    {
      imgUrl: "./images/maps/Fernir.jpg",
      mapName: "Fernir",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3084023988",
      rules:
        "1.5k gold, medium resources, 5 peace, army limit 333, all on, no buy no sell, catapults vs troops allowed",
    },
    {
      imgUrl: "./images/maps/MoonMap.jpg",
      mapName: "MoonMap",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3084246818",
      rules:
        "2.5k gold, high goods, 5 peace, all on, no grand towers, catapults vs troops allowed, no trebuchet bug",
    },
    {
      imgUrl: "./images/maps/nobuynosell.jpg",
      mapName: "Nobuynosell",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3090162375",
      rules:
        "500 gold, high resources, 5 peace , army limit 333, all off, no buy no sell",
    },
    {
      imgUrl: "./images/maps/Lowland.jpg",
      mapName: "Lowland",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2950628234",
      rules: "1k gold, medium goods, 10 peace, all off",
    },
  ];

  const allMapsDownloadUrl =
    "https://steamcommunity.com/workshop/filedetails/?id=3013793496";

  return (
    <section id="maps" className="container mx-auto px-12 py-4">
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <h2 className="text-4xl font-bold text-white mb-4">Maps</h2>
      <div className="mb-6">
        <p className="py-2">&nbsp;</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {maps.map((map, index) => (
          <MapCard
            key={index}
            imgUrl={map.imgUrl}
            mapName={map.mapName}
            rules={map.rules}
            steamUrl={map.steamUrl}
          />
        ))}
      </div>
      <p className="py-6 ">&nbsp;</p>
      <a
        href={allMapsDownloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg inline-block"
      >
        Download All Maps
      </a>
    </section>
  );
};

export default MapsSection;
