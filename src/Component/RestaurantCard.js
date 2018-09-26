/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types:0 */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


const CardData = (props) => {
  const { card } = props;
  return (
    <Card className="card">
      <CardHeader
        className="card_header"
        avatar={(
          <Avatar className="avatar">
            {card.restaurant.name.split('')[0]}
          </Avatar>
)}
        title={card.restaurant.name}
        subheader={card.restaurant.cuisines}
      />
      <CardMedia
        className="card_image"
        component="img"
        image={card.restaurant.thumb}
        title={card.restaurant.name}
      />
      <CardContent className="card_content">
        <Typography component="p">
          <b>Address : </b>
          <br />
          {card.restaurant.location.address}
        </Typography>
        <Typography component="p">
          {card.restaurant.location.locality}
        </Typography>
        <Typography component="p">
          {card.restaurant.location.city}
        </Typography>
        <br />
        <Typography component="p">
          <b>RATING : </b>
          {card.restaurant.user_rating.aggregate_rating}
        </Typography>
      </CardContent>
      <Link className="restaurant_link" to={`restaurant-detail/${card.restaurant.id}`}>
        <Button className="details_button">Details</Button>
      </Link>
      <Link className="restaurant_link" to={`/add-to-category/${card.restaurant.name}`}>
        <Button className="category_button">Add to Category</Button>
      </Link>
    </Card>
  );
};

export default CardData;
