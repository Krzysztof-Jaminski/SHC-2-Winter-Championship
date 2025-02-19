import MapCard from "./MapCard";
import maps from "../../../public/data/maps";

const MapsSection = () => {
  const allMapsDownloadUrl =
    "https://steamcommunity.com/sharedfiles/filedetails/?id=3430020102";

  return (
    <section id="maps" className="container mx-auto px-12 py-4">
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
      <p className="py-6">&nbsp;</p>
      <div className="flex justify-center">
        <a
          href={allMapsDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-800 text-white font-medium py-2.5 px-5 rounded-lg inline-block"
        >
          Download All Maps
        </a>
      </div>
    </section>
  );
};

export default MapsSection;
