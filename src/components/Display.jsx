import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { albumsData } from "../assets/assets.js";
import DisplayHome from "./DisplayHome.jsx";
import DisplayAlbum from "./DisplayAlbum.jsx";
import SearchResults from "./SearchResults.jsx"; // Search results component
import DisplayPlaylist from "./DisplayPlaylist.jsx";
import PropTypes from "prop-types";

const Display = ({ searchResults, onAddToPlaylist }) => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = isAlbum ? albumsData[Number(albumId)].bgColor : null;

  // console.log("searchResults is: " + typeof searchResults);
  // console.log("onAddToPlaylist is: " + typeof onAddToPlaylist);

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {searchResults ? (
        // If searchResults are available, show the SearchResults component
        <SearchResults
          results={searchResults}
          onAddToPlaylist={onAddToPlaylist}
        />
      ) : (
        // Otherwise, show the existing Routes logic
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route path="/album/:id" element={<DisplayAlbum />} />
          <Route path="/playlists/:id" element={<DisplayPlaylist />} />
        </Routes>
      )}
    </div>
  );
};

// Define PropTypes
Display.propTypes = {
  searchResults: PropTypes.object, // `text` must be a string and is required
  onAddToPlaylist: PropTypes.func.isRequired, // `text` must be a string and is required
};

export default Display;
