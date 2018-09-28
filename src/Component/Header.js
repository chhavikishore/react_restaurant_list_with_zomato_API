/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import { Link } from 'react-router-dom';

// importing component of material u
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import Folder from '@material-ui/icons/Folder';
import Home from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import Navigation from '../../node_modules/@material-ui/core/AppBar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
    this.toggleDrawerClose = this.toggleDrawerClose.bind(this);
    this.toggleDrawerOpen = this.toggleDrawerOpen.bind(this);
  }

  toggleDrawerOpen() {
    this.setState({ left: true });
  }

  toggleDrawerClose() {
    this.setState({ left: false });
  }

  render() {
    const { left } = this.state;
    return (
      <Navigation className="nav">
        <ul className="nav_ul">
          <li className="menu">
            <MenuIcon onClick={this.toggleDrawerOpen}>#</MenuIcon>
          </li>
          <li>
            <Link className="home_link" to="/">
              <div className="logo">Foodie</div>
            </Link>
          </li>
        </ul>
        <Drawer open={left} onClose={this.toggleDrawerClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawerClose}
            onKeyDown={this.toggleDrawerClose}
          >
            <div className="drawerList">
              <List>
                <Link to="/">
                  <div>
                    <Home>#</Home>
                    <span>Home</span>
                  </div>
                </Link>
                <Link className="restaurant_link" to="/collection-details">
                  <div>
                    <Folder>#</Folder>
                    <span>View Categories</span>
                  </div>
                </Link>
              </List>
            </div>
          </div>
        </Drawer>
      </Navigation>
    );
  }
}

export default Navbar;
