// @flow
import React from 'react';

import TrackRow from 'components/TrackRow';

const TrackList = ({ tracks, togglePlaying, toggleLike, currentlyPlaying, likes }: Props) => (
  <div>
    {
      tracks.map(track => (
        <TrackRow
          key={track.id}
          track={track}
          playing={track.previewUrl === currentlyPlaying}
          liked={likes.includes(track.id)}
          togglePlaying={() => togglePlaying(track.previewUrl)}
          toggleLike={() => toggleLike(track.id)}
        />
      ))
    }
  </div>
);

type Props = {
  tracks: Array<TrackType>,
  likes: Array<TrackIdType>,
  togglePlaying: (previewUrl: string) => void,
  toggleLike: (trackId: TrackIdType) => void,
  currentlyPlaying: ?string,
};

export default TrackList;
