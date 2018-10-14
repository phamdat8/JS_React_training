import React from 'react';
import App from '../App';
import ShowCategory from '../modules/categories/ShowCategory';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route path='/:category_name' component={ShowCategory} />
  </Switch>
);

export default Router;
