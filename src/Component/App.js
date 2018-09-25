/* eslint react/jsx-filename-extension:0 */
import React, { Fragment } from "react";

//importing component using .js extension file in app.js
import Navigation from "../Component/Header";
import SearchBar from "../Component/Searchbar"; 
import RestaurantCollection from "../Component/RestaurantCollection";

//importing scss files
import '../styles/base.scss';
import '../styles/styles.scss';


var result = [];
const API_key = 'bf689b8eacf7d141ef93a157dd3148fc';

class App extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            restaurant :[]
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(restaurantName){ //to be called on click on search button which calls the API according to state value which was given by user
        if(restaurantName !=undefined && restaurantName!=null && restaurantName!=''){
            var url = `https://developers.zomato.com/api/v2.1/search?q=${restaurantName}`;
            fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'user-key': API_key,
                }
            })
            .then(response => response.json())
            .then(restaurant => this.setState(() => ({ restaurant })));
        }  
    }
    
    render() {
        return (
            <div>
                <Navigation/>
                <SearchBar handleSearch={this.handleSearch}/> 
                <RestaurantCollection restaurant={this.state.restaurant}/>      
            </div>
        );
    }
}

export default App;