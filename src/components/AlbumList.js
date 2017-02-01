// @flow
import React from 'react';

import AlbumRow from 'components/AlbumRow';

const AlbumList = ({ albums }: Props) => (
  <div>
    {
      albums.map(album => (
        <AlbumRow
          key={album.id}
          album={album}
        />
      ))
    }
  </div>
);

type Props = {
  albums: Array<AlbumListType>,
};

export default AlbumList;
