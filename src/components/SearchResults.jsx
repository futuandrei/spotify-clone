import PropTypes from "prop-types";

const SearchResults = ({ results, onAddToPlaylist }) => {
  const handleAddClick = (song) => {
    onAddToPlaylist(song); // Trigger the callback to handle adding to a playlist
  };

  return (
    <div className="text-white">
      {results.length > 0 ? (
        results.map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between gap-4 p-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={song.image}
                alt={song.name}
                className="w-16 h-16 rounded"
              />
              <div>
                <h3 className="text-lg font-bold">{song.name}</h3>
                <p className="text-sm text-gray-400">{song.desc}</p>
                <p className="text-sm">{song.duration}</p>
              </div>
            </div>
            <button
              onClick={() => handleAddClick(song)}
              className="text-purple-500 hover:text-purple-700"
            >
              +
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  );
};

// Define PropTypes
SearchResults.propTypes = {
  results: PropTypes.array.isRequired, // `results` must be an array and is required
  onAddToPlaylist: PropTypes.func.isRequired, // `onAddToPlaylist` must be a function and is required
};

export default SearchResults;
