import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class CardData extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card className="card">
                <CardHeader title={this.props.card.restaurant.name}
                subheader={this.props.card.restaurant.cuisines}/>
                <CardMedia className="card_image" 
                component="img"
                image={this.props.card.restaurant.thumb} 
                title={this.props.card.restaurant.name}/>
                <CardContent className="card_content">
                    <Typography component="p">
                        {this.props.card.restaurant.location.address}
                    </Typography>
                    <Typography component="p">
                        {this.props.card.restaurant.location.locality}
                    </Typography>
                    <Typography component="p">
                        {this.props.card.restaurant.location.city}
                    </Typography>
                    <Typography component="p">
                        <b>RATING : </b>{this.props.card.restaurant.user_rating.aggregate_rating}
                    </Typography>
                </CardContent>
                <Link className="restaurant_link" to={`restaurant_detail/${this.props.card.restaurant.id}`}>
                    <Button className="details_button">Details</Button>
                </Link>
                <Link className="restaurant_link" to={`/add_to_category/${this.props.card.restaurant.name}`}>
                    <Button className="category_button">Add to Category</Button>
                </Link>
            </Card>
        );
    }
}

export default CardData; 

