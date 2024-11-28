import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Header from "./components/Header";
import { PlayerContext } from "./context/PlayerContext";
import { PlaylistProvider, usePlaylist } from "./context/PlaylistContext";
import { songsData } from "./assets/assets";

const AppContent = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [searchResults, setSearchResults] = useState(null);
  const { addToPlaylist } = usePlaylist(); // Access playlist context

  // Handle search functionality
  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults(null); // Reset if input is empty
      return;
    }
    const filtered = songsData.filter((song) =>
      song.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  // Callback to add a song to a playlist
  const handleAddToPlaylist = (song) => {
    const playlistName = prompt("Enter playlist name:");
    if (playlistName) {
      addToPlaylist(playlistName, song); // Add song to playlist
    }
  };

  return (
    <div className="h-screen bg-black">
      <Header onSearch={handleSearch} />
      <div className="h-[80%] flex">
        <Sidebar />
        <Display
          searchResults={searchResults}
          onAddToPlaylist={handleAddToPlaylist}
        />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

const App = () => {
  return (
    <PlaylistProvider>
      <AppContent />
    </PlaylistProvider>
  );
};

export default App;
