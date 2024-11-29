import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  // console.log("PlaylistContext: " + typeof children);

  const addToPlaylist = (playlistName, song) => {
    console.log(`Added to playlist ${playlistName} and song:`, song);
    console.log("Playlists in context:", playlists);
    setPlaylists((prev) => {
      const updated = [...prev];
      const playlist = updated.find((p) => p.name === playlistName);
      if (playlist) {
        playlist.songs.push(song);
      } else {
        updated.push({
          id: playlistName,
          // songs: [song],
          // id: crypto.randomUUID(), // Assign a unique ID
          name: playlistName,
          songs: [song],
        });
      }
      return updated;
    });
  };

  return (
    <PlaylistContext.Provider value={{ playlists, addToPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

// Define PropTypes
PlaylistProvider.propTypes = {
  children: PropTypes.object.isRequired, // `` must be a `` and is required
};

export const usePlaylist = () => useContext(PlaylistContext);
