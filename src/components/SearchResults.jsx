import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="text-white">
      {results.length > 0 ? (
        results.map((song) => (
          <div key={song.id} className="flex items-center gap-4 p-2">
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
        ))
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
