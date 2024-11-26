import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Header from "./components/Header";
import { PlayerContext } from "./context/PlayerContext";
import { songsData } from "./assets/assets";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [searchResults, setSearchResults] = useState(null);

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

  return (
    <div className="h-screen bg-black">
      <Header onSearch={handleSearch} />
      <div className="h-[80%] flex">
        <Sidebar />
        <Display searchResults={searchResults} />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
