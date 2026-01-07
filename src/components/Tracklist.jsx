import React from "react";
import Track from "./Track";

function Tracklist({ tracks = [], playlistTracks, setPlaylistTracks, isRemoval }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}

export default Tracklist;
