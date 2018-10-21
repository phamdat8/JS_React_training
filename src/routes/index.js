import React from 'react';
import Home from '../modules/home/';
import ShowCategory from '../modules/categories/ShowCategory';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/categories/:id' component={ShowCategory} />
  </Switch>
);

export default Router;
