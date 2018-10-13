import React, { Component } from 'react';
import axios from 'axios';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/categories`)
      .then(res => {
        console.log('Categories --->', res);
        const categories = res.data.categories;
        this.setState({ categories: categories });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let htmlData = <div></div>;
    const categories = this.state.categories;

    if(categories.length > 0) {
      htmlData = <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex">
          { categories.map(category => <a key={category.id} className='p-2' href={category.name}>{category.name}</a>)}
        </nav>
      </div>
    }
    return(
      htmlData
    )
  }
}

export default NavMenu;
