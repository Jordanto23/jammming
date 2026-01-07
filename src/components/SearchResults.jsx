import React from "react";
import Tracklist from "./Tracklist";

function SearchResults({ searchResults, playlistTracks, setPlaylistTracks }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist
        tracks={searchResults}
        playlistTracks={playlistTracks}
        setPlaylistTracks={setPlaylistTracks}
        isRemoval={false}
      />
    </div>
  );
}

export default SearchResults;
