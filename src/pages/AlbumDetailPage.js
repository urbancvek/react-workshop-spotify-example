// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

import TrackList from 'components/TrackList';
import * as spotify from 'helpers/spotify';

@autobind
class AlbumDetailPage extends Component {
  props: Props;
  state: State;
  currentPreview: ?HTMLAudioElement;

  state: State = {
    album: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    if (this.currentPreview) {
      this.currentPreview.pause();
      this.currentPreview = null;
    }
  }

  async fetchData() {
    const album = await spotify.getAlbum(this.props.match.params.albumId);
    this.setState({ album });
  }

  togglePlaying(previewUrl: string) {
    if (this.currentPreview) this.currentPreview.pause();

    if (this.currentPreview && this.currentPreview.src === previewUrl) {
      this.currentPreview = null;
      this.forceUpdate();
      return;
    }

    const newAudioPreview = new Audio(previewUrl);
    this.currentPreview = newAudioPreview;
    this.currentPreview.play();
    this.forceUpdate();
  }

  render() {
    if (!this.state.album) return <div />;

    const currentlyPlaying = this.currentPreview && !this.currentPreview.paused
      ? this.currentPreview.src
      : null
    ;

    return (
      <TrackList
        tracks={this.state.album.tracks}
        likes={this.props.likes}
        togglePlaying={this.togglePlaying}
        toggleLike={this.props.toggleLike}
        currentlyPlaying={currentlyPlaying}
      />
    );
  }
}

type Props = {
  match: {
    params: {
      albumId: string,
    },
  },
  likes: Array<TrackIdType>,
  toggleLike: (trackId: TrackIdType) => void,
};

type State = {
  album: ?AlbumFullType,
};

export default AlbumDetailPage;
