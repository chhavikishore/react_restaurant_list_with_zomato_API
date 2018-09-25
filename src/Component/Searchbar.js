/* eslint react/jsx-filename-extension:0 */
import React from 'react';

// importing component of material ui
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Input } from '../../node_modules/@material-ui/core';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(event) { // to change state value on each change in input value
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div>
        <Paper elevation={1} className="search">
          <div className="search_text_div">
            <Input
              placeholder="Search…"
              disableUnderline
              onChange={this.changeInput}
            />
            <Button
              onClick={() => {
                const newLocal = this.props.handleSearch;
                newLocal(this.state.searchTerm);
              }}
            >
Search

            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default SearchBar;
