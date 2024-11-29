// import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import PropTypes from "prop-types";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  console.log("SongItem message: " + typeof image);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

// Define PropTypes
SongItem.propTypes = {
  name: PropTypes.string.isRequired, // `text` must be a string and is required
  image: PropTypes.any.isRequired, // `image` must be image required
  desc: PropTypes.string.isRequired, // `text` must be a string and is required
  id: PropTypes.string.isRequired, // `text` must be a string and is required
};

export default SongItem;
