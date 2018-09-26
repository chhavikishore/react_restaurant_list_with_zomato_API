/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types:0 */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


const apiKey = 'bf689b8eacf7d141ef93a157dd3148fc';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurantDetails: {} };
  }

  componentDidMount() { // fetching restaurant data from restaurant id
    // getting the restaurant id from route params
    const { match } = this.props;
    const restaurantId = match.params.id;
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
    const { restaurantDetails } = this.state; // restaurant details
    if (!restaurantDetails) {
      return (<div> Loading .... </div>);
    }
    return (
      <div className="res_details_card">
        <Card className="resDetailsCard">
          <CardHeader
            title={restaurantDetails.name}
            subheader={restaurantDetails.cuisines}
          />
          <CardMedia
            component="img"
            image={restaurantDetails.thumb}
            title={restaurantDetails.name}
          />
          {/* <CardContent className="card_content">
            {restaurantDetails.location}
            <div>
                {restaurantDetails}
            </div>
            <Typography component="p">
                {restaurantDetails.location.locality}
            </Typography>
            <Typography component="p">
                {restaurantDetails.location.city}
            </Typography>
            <Typography component="p">
                <b>RATING : </b>{restaurantDetails.user_rating.aggregate_rating}
            </Typography>
          </CardContent> */}
          <CardContent className="detail_card_content">
            <Link className="restaurant_link" to={`../add-to-category/${restaurantDetails.name}`}>
              <Button className="category_button">Add to Category</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default RestaurantDetail;
