// @flow
declare type TrackIdType = string;
declare type AlbumIdType = string;

declare type TrackType = {
  id: TrackIdType,
  name: string,
  previewUrl: string,
};

declare type AlbumListType = {
  id: AlbumIdType,
  name: string,
  image: string,
};

declare type AlbumFullType = {
  id: AlbumIdType,
  name: string,
  image: string,
  tracks: Array<TrackType>,
}
