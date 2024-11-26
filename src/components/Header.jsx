import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass query to App.jsx
  };

  return (
    <div className="w-full h-[90px] flex justify-between items-center font-semibold p-5">
      {/* Search Bar */}
      <div className="flex-grow min-w-0">
        <input
          className="w-full px-6 py-2 text-white rounded bg-[#121212] placeholder:text-gray-500"
          type="text"
          placeholder="Type to search"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {/* Explore Premium, Install App */}
      <div className="flex items-center gap-4 ml-4">
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
          Explore Premium
        </p>
        <p className="bg-black py-1 px-3 text-white rounded-2xl text-[15px] cursor-pointer">
          Install App
        </p>
        <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
          A
        </p>
      </div>
    </div>
  );
};

export default Header;
