// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import AlbumSearchPage from 'pages/AlbumSearchPage';
import AlbumDetailPage from 'pages/AlbumDetailPage';
import LikesPage from 'pages/LikesPage';
import * as storage from 'helpers/storage';

@autobind
class App extends Component {
  state: State;

  state: State = {
    likes: [],
  };

  componentWillMount() {
    const likes = storage.load('likes');

    this.setState({ likes: likes || [] });
  }

  toggleLike(trackId: string) {
    const { likes } = this.state;

    let newLikes;
    if (likes.includes(trackId)) {
      const index = likes.indexOf(trackId);
      newLikes = [...likes.slice(0, index), ...likes.slice(index + 1)];
    } else {
      newLikes = [...likes, trackId];
    }

    this.setState({ likes: newLikes });
    storage.save('likes', newLikes);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Route
            exact
            path="/"
            component={AlbumSearchPage}
          />

          <Route
            path="/album/:albumId"
            render={(props) => (
              <AlbumDetailPage
                likes={this.state.likes}
                toggleLike={this.toggleLike}
                {...props}
              />
            )}
          />

          <Route
            path="/likes"
            render={(props) => (
              <LikesPage
                likes={this.state.likes}
                toggleLike={this.toggleLike}
                {...props}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

type State = {
  likes: Array<TrackIdType>,
};

export default App;
