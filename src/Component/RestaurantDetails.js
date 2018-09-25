/* eslint react/jsx-filename-extension:0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const API_key = 'bf689b8eacf7d141ef93a157dd3148fc';

class RestaurantDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { restaurantDetails: {}, open: false};
    }

    componentDidMount() { //fetching restaurant data from restaurant id 
        const restaurantId = this.props.match.params.id; //getting the restaurant id from route params
        var url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'user-key': API_key,
            }
        })
            .then(response => response.json())
            .then(restaurantDetails => { this.setState(() => ({ restaurantDetails })); //console.log(this.state.restaurantDetails.location.address);
         });
    }

    render() {
        if (!this.state.restaurantDetails) {
            return (<div> Loading .... </div>);
        }
        else {
            const res_Details = this.state.restaurantDetails; //restaurant details
            return (
                <div>
                    <Card>
                        <CardHeader title={res_Details.name}
                            subheader={res_Details.cuisines} />
                        <CardMedia className="card_image"
                            component="img"
                            image={res_Details.thumb}
                            title={res_Details.name} />
                        <CardContent className="card_content">
                            {/* {res_Details.location.address}
                            <div>
                                {res_Details}
                            </div>
                            <Typography component="p">
                                {res_Details.location.locality}
                            </Typography>
                            <Typography component="p">
                                {res_Details.location.city}
                            </Typography>
                            <Typography component="p">
                                <b>RATING : </b>{res_Details.user_rating.aggregate_rating}
                            </Typography> */}
                        </CardContent>
                        <Link className="restaurant_link" to={`../add_to_category/${res_Details.name}`}><Button className="category_button">Add to Category</Button></Link>
                    </Card>
                </div>
            );
        }
    }
}

export default RestaurantDetail;