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
    axios.get('http://192.168.1.164:4000/categories')
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
    let htmlData = <div className='loading'>
      <img alt='loading' src="https://icons8.com/preloaders/generator.php?filmstrip&amp;image=30&amp;speed=9&amp;fore_color=000000&amp;back_color=FFFFFF&amp;size=160x20&amp;transparency=0&amp;reverse=0&amp;orig_colors=0&amp;gray_transp=1&amp;image_type=2&amp;inverse=0&amp;flip=0&amp;frames_amount=13&amp;word=237-261-157-41-266-237-41-257-237-266-57-41-227-41-36-36-36&amp;uncacher=42.95799382614014" />
    </div>;

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
