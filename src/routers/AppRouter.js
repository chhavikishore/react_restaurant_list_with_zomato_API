/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../Component/App';
import RestaurantCategory from '../Component/RestaurantCategory';
import RestaurantDetail from '../Component/RestaurantDetails';
import CategoryCollection from '../Component/CategoryCollection';
import Navigation from '../Component/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/collection-details" component={CategoryCollection} />
        <Route path="/restaurant-detail/:id" component={RestaurantDetail} />
        <Route path="/add-to-category/:name" component={RestaurantCategory} />
        <Route exact path="/home" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
