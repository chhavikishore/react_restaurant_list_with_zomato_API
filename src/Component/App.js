/* eslint react/jsx-filename-extension:0 */
/* global fetch:true */
import React from 'react';

//  importing component using .js extension file in app.js
import Navigation from './Header';
import SearchBar from './Searchbar';
import RestaurantCollection from './RestaurantCollection';

//  importing scss files
import '../styles/base.scss';
import '../styles/styles.scss';


const apiKey = 'bf689b8eacf7d141ef93a157dd3148fc';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(restaurantName) { // to be called on serach button click
    if (restaurantName !== undefined && restaurantName !== null && restaurantName !== '') {
      const url = `https://developers.zomato.com/api/v2.1/search?q=${restaurantName}`;
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'user-key': apiKey,
        },
      })
        .then(response => response.json())
        .then(restaurant => this.setState(() => ({ restaurant })));
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <SearchBar handleSearch={this.handleSearch} />
        <RestaurantCollection restaurant={this.state.restaurant} />
      </div>
    );
  }
}

export default App;
