/* eslint react/jsx-filename-extension:0 */
import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';

import SearchRestaurant from './SearchRestaurant';
import RestaurantCollection from './RestaurantCollection';

//  importing scss files
import '../styles/base.scss';
import '../styles/styles.scss';


const apiKey = ''; //put your API Key

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [],
    };
    this.handleSearchRestaurant = this.handleSearchRestaurant.bind(this);
  }

  handleSearchRestaurant(restaurantName) { // to be called on serach button click
    if (restaurantName !== undefined && restaurantName !== null && restaurantName !== '') {
      const url = `https://developers.zomato.com/api/v2.1/search?q=${restaurantName}`;
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'user-key': apiKey,
        },
      })
        .then(response => response.json())
        .then(restaurant => this.setState(() => ({ restaurant })));
    }
  }

  // transition() {
  //   return <Slide direction="up" {...this} />;
  // }

  // handleClickOpen() {
  //   this.setState({ open: true });
  // }

  // handleClose() {
  //   this.setState({ open: false });
  // }

  render() {
    const { restaurant } = this.state;
    return (
      <div>
        <SearchRestaurant handleSearchRestaurant={this.handleSearchRestaurant} />
        <RestaurantCollection restaurant={restaurant} />
        {/* <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={this.transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Sound
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog> */}
      </div>
    );
  }
}

export default App;
