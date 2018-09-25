/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import CardData from './RestaurantCard';

const RestaurantCollection = (props) => {   
    if(props.restaurant.restaurants) {
        const resDetail = props.restaurant.restaurants;
        return (
            <div className="flex">
                {resDetail.map(function(item) {
                    return (<CardData key={item.restaurant.id} card={item}></CardData>);
                })}
            </div>
        );
    } else{ return <div></div> }
  }

export default RestaurantCollection;
