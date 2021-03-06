/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types:0 */
import React from 'react';
import CardData from './RestaurantCard';

const RestaurantCollection = (props) => {
  const { restaurant } = props;
  if (restaurant.restaurants) {
    const restaurantDetail = restaurant.restaurants;
    return (
      <div className="flex">
        {restaurantDetail.map(item => (<CardData key={item.restaurant.id} card={item} />))}
      </div>
    );
  } return <div />;
};

export default RestaurantCollection;
