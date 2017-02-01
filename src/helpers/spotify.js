// @flow
import axios from 'axios';

const getAlbum = async (albumId: string): Promise<AlbumFullType> => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`);
    const album = response.data;

    return {
      id: album.id,
      image: album.images && album.images[0] && album.images[0].url,
      name: album.name,
      tracks: album.tracks.items.map(({ id, name, preview_url }) => ({
        id,
        name,
        previewUrl: preview_url,
      })),
    };
  } catch (error) {
    throw Error(error);
  }
};

const searchAlbums = async (searchText: string): Promise<Array<AlbumListType>> => {
  if (!searchText && searchText.length === 0) throw Error('searchText ne sme biti prazen');

  const query = {
    params: {
      type: 'album',
      q: searchText,
    },
  };

  try {
    const response = await axios.get('https://api.spotify.com/v1/search', query);
    const albums = response.data.albums.items.map(album => ({
      id: album.id,
      name: album.name,
      image: album.images && album.images[0] && album.images[0].url,
    }));

    return albums;
  } catch (error) {
    throw Error(error);
  }
};

const getTracks = async (trackIds: Array<TrackIdType>): Promise<Array<TrackType>> => {
  // Spotify expects ids separated by commas (have to remove [])
  const queryString = JSON.stringify(trackIds)
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

    const tracks = response.data.tracks.map(({ id, name, preview_url }) => ({
      id,
      name,
      previewUrl: preview_url,
    }));
    return tracks;
  } catch (error) {
    throw Error(error);
  }
};

declare type TrackType = {
  id: TrackIdType,
  name: string,
  previewUrl: string,
};

export { getAlbum, searchAlbums, getTracks };
