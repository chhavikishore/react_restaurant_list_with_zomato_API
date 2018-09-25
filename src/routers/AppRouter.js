import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../Component/App';
import RestaurantCategory from '../Component/RestaurantCategory';
import RestaurantDetail from '../Component/RestaurantDetails';
import CategoryCollection from '../Component/CategoryCollection';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/collection_details" component={CategoryCollection} />
        <Route path="/restaurant_detail/:id" component={RestaurantDetail} />
        <Route path="/add_to_category/:name" component={RestaurantCategory} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;