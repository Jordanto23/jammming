import React from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlistName, setPlaylistName, playlistTracks, setPlaylistTracks }) {

  // Handler for when the user types a new name
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <div className="Playlist">
      {/* Editable input for playlist name */}
      <input
        type="text"
        value={playlistName}
        onChange={handleNameChange}
        placeholder="Playlist Name"
      />

      {/* Render tracks in the playlist */}
      <Tracklist
        tracks={playlistTracks}
        playlistTracks={playlistTracks}
        setPlaylistTracks={setPlaylistTracks}
        isRemoval={true} // "-" button for removing tracks
      />

      <button onClick={() => alert("Saving playlist to Spotify!")}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
