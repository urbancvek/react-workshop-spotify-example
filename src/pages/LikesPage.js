// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

import TrackList from 'components/TrackList';
import * as spotify from 'helpers/spotify';

@autobind
class LikesPage extends Component {
  props: Props;
  state: State;
  currentPreview: ?HTMLAudioElement;

  state: State = {
    playlist: [],
  };

  componentDidMount() {
    this.fetchData(this.props.likes);
  }

  componentWillUnmount() {
    if (this.currentPreview) {
      this.currentPreview.pause();
      this.currentPreview = null;
    }
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.likes.length === 0) {
      this.setState({ playlist: [] });
    } else {
      this.fetchData(newProps.likes);
    }
  }

  async fetchData(likes: Array<TrackIdType>) {
    try {
      const playlist = await spotify.getTracks(likes);

      this.setState({ playlist });
    } catch (error) {
      console.error(error);
    }
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
    if (!this.state.playlist) return <div />;

    const currentlyPlaying = this.currentPreview && !this.currentPreview.paused
      ? this.currentPreview.src
      : null
    ;

    return (
      <TrackList
        tracks={this.state.playlist}
        likes={this.props.likes}
        togglePlaying={this.togglePlaying}
        toggleLike={(trackId: TrackIdType) => this.props.toggleLike(trackId)}
        currentlyPlaying={currentlyPlaying}
      />
    );
  }
}

type Props = {
  likes: Array<TrackIdType>,
  toggleLike: (trackId: TrackIdType) => void,
};

type State = {
  playlist: Array<TrackType>,
};

export default LikesPage;
