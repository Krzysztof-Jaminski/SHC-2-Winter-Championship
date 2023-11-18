const MapCard = ({ imgUrl, mapName, rules, steamUrl }) => {
  // Determine the height class based on your specific width or layout
  // This is just an example, you may need to adjust the 'h-64' to match your specific card width
  const heightClass = "h-64"; // This should be the same as your width for a square aspect ratio

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-[#121212]">
      <a href={steamUrl} target="_blank" rel="noopener noreferrer">
        <div
          className={`${heightClass} md:${heightClass} rounded-t-lg relative group bg-cover bg-center`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="overlay absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center">
            {/* Overlay content */}
          </div>
        </div>
      </a>
      <div className="p-4">
        <h5 className="text-xl font-semibold text-white">{mapName}</h5>
        <p className="text-[#ADB7BE]">{rules}</p>
      </div>
    </div>
  );
};

export default MapCard;
