// @flow
import axios from 'axios';

const getAlbum = async (albumId: string) => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`);

    return response;
  } catch (error) {
    return error;
  }
};

const searchAlbums = async (searchText: string) => {
  if (!searchText && searchText.length === 0) throw Error('searchText ne sme biti prazen');

  const query = {
    params: {
      type: 'album',
      q: searchText,
    },
  };

  try {
    const response = await axios.get('https://api.spotify.com/v1/search', query);
    return response;
  } catch (error) {
    return error;
  }
};

const getTracks = async (tracks: Array<TrackIdType>) => {
  // Spotify expects ids separated by commas (have to remove [])
  const queryString = JSON.stringify(tracks)
    .slice(1, -1)
    .replace(new RegExp('"', 'g'), '');

  if (!queryString && queryString.length === 0) throw Error('Podaj array v katerem so id-ji trackov');

  const query = {
    params: {
      ids: queryString,
    },
  };

  try {
    const response = await axios.get('https://api.spotify.com/v1/tracks', query);
    return response;
  } catch (error) {
    return error;
  }
};

export { getAlbum, searchAlbums, getTracks };
