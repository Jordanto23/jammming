// src/Spotify.js
const clientId = "YOUR_SPOTIFY_CLIENT_ID"; // replace with your Spotify app ID
const redirectUri = "http://localhost:5173";
let accessToken = "";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    const urlParams = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (urlParams && expiresInMatch) {
      accessToken = urlParams[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const scope = "playlist-modify-public";
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
      window.location = authUrl;
    }
  },

  async search(term) {
    const token = Spotify.getAccessToken();
    if (!token) return [];

    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;
    try {
      const response = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!data.tracks) return [];
      return data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    } catch (error) {
      console.error("Spotify search error:", error);
      return [];
    }
  },

  async savePlaylist(playlistName, trackUris) {
    if (!playlistName || trackUris.length === 0) return;

    const token = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

    try {
      const userResponse = await fetch("https://api.spotify.com/v1/me", { headers });
      const userData = await userResponse.json();
      const userId = userData.id;

      const createPlaylistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            name: playlistName,
            description: "Created with Jammming App",
            public: true
          })
        }
      );
      const playlistData = await createPlaylistResponse.json();
      const playlistId = playlistData.id;

      await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ uris: trackUris })
        }
      );

      alert(`Playlist "${playlistName}" saved to your Spotify account!`);
    } catch (error) {
      console.error("Error saving playlist:", error);
      alert("There was an error saving your playlist. Check console for details.");
    }
  }
};

export default Spotify;
