import React from 'react';
import CardData from './RestaurantCard';

class RestaurantCollection extends React.Component {

    constructor(props){
        super(props);
    }

  render() {    
    if(this.props.restaurant.restaurants) {
        //localStorage.setItem("searched_restaurant_collection",JSON.stringify(this.props.restaurant.restaurants));
        return (
            <div className="flex">
                {this.props.restaurant.restaurants.map(function(item) {
                    return (<CardData key={item.restaurant.id} card={item}></CardData>);
                })}
            </div>
        );
    } else{ return <div></div> }
  }
}

export default RestaurantCollection;
