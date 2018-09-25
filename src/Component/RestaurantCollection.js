/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import CardData from './RestaurantCard';

const RestaurantCollection = (props) => {
  if (props.restaurant.restaurants) {
    const resDetail = props.restaurant.restaurants;
    return (
      <div className="flex">
        {resDetail.map(item => (<CardData key={item.restaurant.id} card={item} />))}
      </div>
    );
  } return <div />;
};

export default RestaurantCollection;
