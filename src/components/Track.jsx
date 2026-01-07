import React from "react";

function Track({ track, playlistTracks, setPlaylistTracks, isRemoval }) {
  const addTrack = () => {
    if (!playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = () => {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {isRemoval ? (
        <button onClick={removeTrack}>-</button>
      ) : (
        <button onClick={addTrack}>+</button>
      )}
    </div>
  );
}

export default Track;
