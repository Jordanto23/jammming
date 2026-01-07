import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import "./index.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div className="App">
      <h1>Jammming</h1>

      <SearchBar setSearchResults={setSearchResults} />

      <div className="App-playlists">
        <SearchResults
          searchResults={searchResults}
          playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}
        />
        <Playlist
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
          playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}
        />
      </div>
    </div>
  );
}

export default App;
