/* eslint react/jsx-filename-extension:0 */
/* global fetch:true */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const apiKey = 'bf689b8eacf7d141ef93a157dd3148fc';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurantDetails: {} };
  }

  componentDidMount() { // fetching restaurant data from restaurant id
    const restaurantId = this.props.match.params.id; // getting the restaurant id from route params
    const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'user-key': apiKey,
      },
    })
      .then(response => response.json())
      .then((restaurantDetails) => {
        this.setState(() => ({ restaurantDetails }));
      });
  }

  render() {
    const resDetails = this.state.restaurantDetails; // restaurant details
    if (!resDetails) {
      return (<div> Loading .... </div>);
    }
    return (
      <div>
        <Card>
          <CardHeader
            title={resDetails.name}
            subheader={resDetails.cuisines}
          />
          <CardMedia
            className="card_image"
            component="img"
            image={resDetails.thumb}
            title={resDetails.name}
          />
          <CardContent className="card_content">
            {/* {resDetails.location.address}
                            <div>
                                {resDetails}
                            </div>
                            <Typography component="p">
                                {resDetails.location.locality}
                            </Typography>
                            <Typography component="p">
                                {resDetails.location.city}
                            </Typography>
                            <Typography component="p">
                                <b>RATING : </b>{resDetails.user_rating.aggregate_rating}
                            </Typography> */}
          </CardContent>
          <Link className="restaurant_link" to={`../add_to_category/${resDetails.name}`}><Button className="category_button">Add to Category</Button></Link>
        </Card>
      </div>
    );
  }
}

export default RestaurantDetail;
