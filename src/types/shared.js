// @flow
declare type TrackIdType = string;
declare type AlbumIdType = string;

declare type TrackType = {
  id: TrackIdType,
  name: string,
  preview_url: string,
};

declare type AlbumType = {
  id: AlbumIdType,
  name: string,
  images: Array<{ url: string }>,
  tracks: {
    items: Array<TrackType>,
  },
};
