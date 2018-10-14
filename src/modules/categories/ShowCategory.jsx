import React, { Component } from 'react';
import App from '../../App';
import Header from '../shared/layouts/Header';
import Footer from '../shared/layouts/Footer';
import NavMenu from '../shared/layouts/NavMenu';
import { Router, Route, Link } from "react-router-dom";

class ShowCategory extends Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <NavMenu />

        <h1>This is category show page</h1>
        <Footer />
        <Route exact path='/' component={App} />
      </div>
    )
  }
}

export default ShowCategory;
