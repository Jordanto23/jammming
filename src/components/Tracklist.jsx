import React from "react";
import Track from "./Track";

function Tracklist({ tracks, playlistTracks, setPlaylistTracks, isRemoval }) {
  const addTrack = (track) => {
    if (playlistTracks.find(t => t.id === track.id)) return;
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
  };

  return (
    <div className="Tracklist">
      {tracks.map(track => (
        <Track
          key={track.id}
          track={track}
          onAdd={addTrack}
          onRemove={removeTrack}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}

export default Tracklist;
