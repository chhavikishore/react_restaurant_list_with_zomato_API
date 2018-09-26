/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types:0 */
import React from 'react';

// importing component of material ui
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';


class SearchRestaurant extends React.Component {
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
    const { handleSearchRestaurant } = this.props;
    const { searchTerm } = this.state;
    return (
      <div>
        <Paper elevation={1} className="search">
          <div className="search_text_div">
            <Input
              placeholder="Search Restaurant…"
              disableUnderline
              onChange={this.changeInput}
            />
            <Button
              onClick={() => { handleSearchRestaurant(searchTerm); }}
            >
Search

            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default SearchRestaurant;
