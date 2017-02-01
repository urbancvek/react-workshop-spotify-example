// @flow
import React from 'react';

const TrackRow = ({ track, togglePlaying, toggleLike, playing, liked }: Props) => (
  <div>
    <p>{track.name}</p>
    <button onClick={togglePlaying}>
      {playing ? 'Pause' : 'Play'}
    </button>
    <button onClick={toggleLike}>
      {liked ? 'Liked' : 'Like'}
    </button>
  </div>
);

type Props = {
  track: TrackType,
  togglePlaying: () => void,
  toggleLike: () => void,
  playing: boolean,
  liked: boolean,
};

export default TrackRow;
