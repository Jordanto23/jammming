import React, { useState } from "react";
import Spotify from "./Spotify";

function SearchBar({ setSearchResults }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (e) => setTerm(e.target.value);

  const search = async () => {
    if (!term) return;
    const results = await Spotify.search(term);
    setSearchResults(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") search();
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Search for a song, artist, or album"
        value={term}
        onChange={handleTermChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}

export default SearchBar;
