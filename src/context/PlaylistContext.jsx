import React, { createContext, useState, useContext } from "react";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  const addToPlaylist = (playlistName, song) => {
    console.log(`Added to playlist ${playlistName} and song:`, song);
    setPlaylists((prev) => {
      const updated = [...prev];
      const playlist = updated.find((p) => p.name === playlistName);
      if (playlist) {
        playlist.songs.push(song);
      } else {
        updated.push({ name: playlistName, songs: [song] });
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

export const usePlaylist = () => useContext(PlaylistContext);
