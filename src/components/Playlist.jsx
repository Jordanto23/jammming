import Tracklist from './Tracklist';

function Playlist() {
  return (
    <div className="Playlist">
      <h2>Playlist Name</h2>
      <Tracklist />
      <button>Save To Spotify</button>
    </div>
  );
}

export default Playlist;
