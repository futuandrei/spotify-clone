import React from "react";
import { usePlaylist } from "../context/PlaylistContext";
import { useParams } from "react-router-dom";

const DisplayPlaylist = () => {
  const { id } = useParams(); // Get the playlist name from the URL
  const { playlists } = usePlaylist();

  // Fetch the playlist by name
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) {
    return <p>Playlist not found</p>;
  }

  return (
    <div className="text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Your Playlists</h2>
      {playlists.length > 0 ? (
        playlists.map((playlist) => (
          <div key={playlist.name} className="mb-6">
            <h3 className="text-xl font-semibold">{playlist.name}</h3>
            <ul className="mt-2">
              {playlist.songs.map((song, idx) => (
                <li key={idx} className="flex items-center gap-4 p-2">
                  <img
                    src={song.image}
                    alt={song.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <h4 className="font-medium">{song.name}</h4>
                    <p className="text-gray-400 text-sm">{song.duration}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No playlists created yet.</p>
      )}
    </div>
  );
};

export default DisplayPlaylist;
