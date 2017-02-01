// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

import SearchInput from 'components/SearchInput';
import AlbumList from 'components/AlbumList';
import * as spotify from 'helpers/spotify';

@autobind
class AlbumSearchPage extends Component {
  state: State;

  state: State = {
    albums: [],
  };

  async fetchData(searchText: string) {
    if (searchText.length === 0) return;
    try {
      const albums = await spotify.searchAlbums(searchText);

      this.setState({ albums });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <SearchInput submit={this.fetchData} />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

type State = {
  albums: Array<AlbumListType>,
};

export default AlbumSearchPage;
