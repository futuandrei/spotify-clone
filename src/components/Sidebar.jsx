// import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../context/PlaylistContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { createPlaylist, playlists } = usePlaylist(); // Access playlist context

  const handleCreatePlaylist = () => {
    const playlistName = prompt("Enter a name for your playlist:");
    if (playlistName) {
      createPlaylist(playlistName); // Create a new playlist
      navigate("/playlists"); // Navigate to playlists page
    }
  };
  console.log(playlists);

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* Home and Search Section */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        <div
          onClick={() => navigate("/search")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Library and Playlist Section */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Your Library" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-5 cursor-pointer"
              src={assets.arrow_icon}
              alt="Expand"
            />
            <img
              className="w-5 cursor-pointer"
              src={assets.plus_icon}
              alt="Add Playlist"
              onClick={handleCreatePlaylist}
            />
          </div>
        </div>

        {/* Playlists Display */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          {playlists.length === 0 ? (
            <>
              <h1>Create your first playlist</h1>
              {/* <p className="font-light">It's easy, we will help you</p> */}
              <button
                className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4"
                onClick={handleCreatePlaylist}
              >
                Create Playlist
              </button>
            </>
          ) : (
            <>
              <h1>Your Playlists</h1>
              <ul className="mt-4">
                {playlists.map((playlist) => (
                  <li
                    key={playlist.id}
                    className="cursor-pointer hover:text-gray-300"
                    onClick={() => {
                      console.log(`Navigating to /playlists/${playlist.id}`);
                      navigate(`/playlists/${playlist.id}`);
                    }}
                  >
                    {playlist.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
