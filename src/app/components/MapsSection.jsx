import MapCard from "./MapCard";
const MapsSection = () => {
  const maps = [
    {
      imgUrl: "./images/maps/Grasslandss.jpg",
      mapName: "Grasslandss",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2906762318",
      rules: "7500 gold/high resources/army limit 250/all off",
    },
    {
      imgUrl: "./images/maps/AroundTheVolcano.jpg",
      mapName: "Around the Volcano",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2999159228",
      rules: "7500 gold/high resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/TheRiver.jpg",
      mapName: "The River",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2946018870",
      rules: "1500 gold/medium resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/MountainRange.jpg",
      mapName: "Mountain Range",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2946124818",
      rules: "3750 gold/medium resources/army limit 333/all on",
    },
    {
      imgUrl: "./images/maps/DIS.jpg",
      mapName: "Death in the Sand",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3017987658",
      rules: "1000 gold/medium resources/army limit 333/all on",
    },
    {
      imgUrl: "./images/maps/LakeAndHill.jpg",
      mapName: "Lake and Hill",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2999173656",
      rules: "3750 gold/medium resources/army limit 333/all off",
    },
    {
      imgUrl: "./images/maps/StonePass.jpg",
      mapName: "Stone Pass",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2946136152",
      rules: "1000 gold/medium resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/TheColosseum.jpg",
      mapName: "The Colosseum",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3038271591",
      rules: "500 gold/low resources/army limit 333/all off",
    },
    {
      imgUrl: "./images/maps/Cauldron.jpg",
      mapName: "Cauldron",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3042564329",
      rules: "7500 gold/high resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/BarrenLands.jpg",
      mapName: "Barren Lands",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3011330730",
      rules: "500 gold/low resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/DesertWinds.jpg",
      mapName: "Desert Winds",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3013753337",
      rules: "3750 gold/medium resources/army limit 333/all on",
    },
    {
      imgUrl: "./images/maps/DuelInTheMiddle.jpg",
      mapName: "Duel in the Middle (No Barricades)",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3039932229",
      rules: "1000 gold/medium resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/Galatia.jpg",
      mapName: "Galatia",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3017613417",
      rules: "7500 gold/high resources/army limit 250/all off",
    },
    {
      imgUrl: "./images/maps/IgiBalance.jpg",
      mapName: "Igi Balance (No Barricades)",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3013858348",
      rules: "1500 gold/medium resources/army limit 333/all on",
    },
    {
      imgUrl: "./images/maps/WOK.jpg",
      mapName: "War of the Knights",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2950624315",
      rules: "1500 gold/medium resources/army limit 333/all off",
    },
    {
      imgUrl: "./images/maps/Oasis.jpg",
      mapName: "Oasis",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3017020566",
      rules: "1000 gold/medium resources/army limit 250/all off",
    },
    {
      imgUrl: "./images/maps/Mars1vs1With2Villages.jpg",
      mapName: "Mars 1vs1 with 2 Villages",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3013790174",
      rules: "1500 gold/medium resources/army limit 333/all on",
    },
    {
      imgUrl: "./images/maps/MarsWood.jpg",
      mapName: "Mars Wood",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3015342283",
      rules: "500 gold/low resources/army limit 333/all off",
    },
    {
      imgUrl: "./images/maps/RushToTheVillages.jpg",
      mapName: "Rush to the Villages",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3016653093",
      rules: "3750 gold/medium resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/SandHills.jpg",
      mapName: "Sand Hills",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2950605763",
      rules: "1000 gold/medium resources/army limit 333/all on",
    },
    {
      imgUrl: "./images/maps/Fernir.jpg",
      mapName: "Fernir",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3084023988",
      rules: "3750 gold/medium resources/army limit 250/all on",
    },
    {
      imgUrl: "./images/maps/MoonMap.jpg",
      mapName: "MoonMap",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3084246818",
      rules: "1500 gold/medium resources/army limit 333/all on",
    },
    {
      imgUrl: "./images/maps/nobuynosell.jpg",
      mapName: "Nobuynosell",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2862468655",
      rules: "1000 gold/medium resources/army limit 333/all off",
    },
    {
      imgUrl: "./images/maps/Lowland.jpg",
      mapName: "Lowland",
      steamUrl:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2950628234",
      rules: "3750 gold/medium resources/army limit 250/all on",
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
