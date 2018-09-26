/* eslint react/jsx-filename-extension:0 */
import React from 'react';

//  importing component using .js extension file in app.js
import SearchRestaurant from './SearchRestaurant';
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
    this.handleSearchRestaurant = this.handleSearchRestaurant.bind(this);
  }

  handleSearchRestaurant(restaurantName) { // to be called on serach button click
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
    const { restaurant } = this.state;
    return (
      <div>
        <SearchRestaurant handleSearchRestaurant={this.handleSearchRestaurant} />
        <RestaurantCollection restaurant={restaurant} />
      </div>
    );
  }
}

export default App;
