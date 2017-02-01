// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

@autobind
class SearchInput extends Component {
  props: Props;
  state: State;

  state: State = {
    searchText: '',
  };

  onChange(event: SyntheticInputEvent) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onKeyPress(event: SyntheticKeyboardEvent) {
    if (event.key === 'Enter') this.props.submit(this.state.searchText);
  }

  render() {
    return (
      <input
        value={this.state.searchText}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}

type Props = {
  submit: (searchText: string) => {},
};

type State = {
  searchText: string,
};

export default SearchInput;
