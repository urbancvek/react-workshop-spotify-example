// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const AlbumRow = ({ album }: albumRowProps) => (
  <Link to={`/album/${album.id}`} style={{ display: 'flex' }}>
    <img
      src={album.image}
      style={{ height: 50, width: 50 }}
      alt={album.name}
    />
    <p>{album.name}</p>
  </Link>
);

type albumRowProps = {
  album: AlbumListType,
};

export default AlbumRow;
