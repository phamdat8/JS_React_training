import React, { Component } from 'react';
import Home from './modules/home/';
import ShowCategory from './modules/categories/ShowCategory';
import Router from './routes/';

class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
