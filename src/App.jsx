import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './App.css';


const searchResults = [
  {
    id: 1,
    name: 'Song A',
    artist: 'Artist A',
    album: 'Album A'
  },
  {
    id: 2,
    name: 'Song B',
    artist: 'Artist B',
    album: 'Album B'
  },
  {
    id: 3,
    name: 'Song C',
    artist: 'Artist C',
    album: 'Album C'
  }
];


function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>

      <SearchBar />

      <div className="App-playlists">
        <SearchResults searchResults={searchResults} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
