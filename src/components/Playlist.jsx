import React from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlistName, setPlaylistName, playlistTracks, setPlaylistTracks }) {
  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="Playlist">
      <input
        value={playlistName}
        onChange={handleNameChange}
        placeholder="Playlist Name"
      />
      <Tracklist
        tracks={playlistTracks}
        playlistTracks={playlistTracks}
        setPlaylistTracks={setPlaylistTracks}
        isRemoval={true} // - button for removing
      />
      <button onClick={() => alert("Saving playlist to Spotify!")}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
