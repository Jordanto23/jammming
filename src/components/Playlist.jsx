import React from "react";
import Tracklist from "./Tracklist";
import Spotify from "./Spotify";

function Playlist({ playlistName, setPlaylistName, playlistTracks, setPlaylistTracks }) {
  const handleNameChange = (e) => setPlaylistName(e.target.value);

  const savePlaylist = () => {
    if (!playlistTracks.length) return;

    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris);

    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <div className="Playlist">
      <input
        type="text"
        value={playlistName}
        onChange={handleNameChange}
        placeholder="Playlist Name"
      />

      <Tracklist
        tracks={playlistTracks}
        playlistTracks={playlistTracks}
        setPlaylistTracks={setPlaylistTracks}
        isRemoval={true}
      />

      <button onClick={savePlaylist}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
