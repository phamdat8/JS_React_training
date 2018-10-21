import React, { Component } from 'react';
import Footer from './modules/shared/layouts/Footer';
import Header from './modules/shared/layouts/Header';
import NavMenu from './modules/shared/layouts/NavMenu';
import Router from './routes/';

class App extends Component {
  render() {
    return (
      <div  className='container'>
        <Header />
        <NavMenu />

        <Router />

        <Footer />
      </div>
    );
  }
}

export default App;
