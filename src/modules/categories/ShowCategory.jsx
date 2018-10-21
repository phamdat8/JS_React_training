import React, { Component } from 'react';
import axios from 'axios';

class ShowCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: props.match.params.id,
      category_name: '',
      posts: []
    }
  }

  componentDidMount() {
    this.getPostsData(this.state.category_id);
  }

  componentDidUpdate() {
    const category_id = this.props.match.params.id;

    if (this.state.category_id !== category_id) {
      this.getPostsData(category_id);
    }
  }

  getPostsData(category_id) {
    axios.get(`https://behero-blog-api.herokuapp.com/categories/${category_id}`)
      .then(res => {
        console.log('Posts response --->', res);
        const posts = res.data.posts;
        const category_name = res.data.name;
        this.setState({
          category_id: category_id,
          category_name: category_name,
          posts: posts
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.posts;
    let htmlData;

    if(posts.length > 0) {
      htmlData = <div>
        <ul>
          { posts.map(post => <li key={post.id}><a href={'/posts/' + post.id }>{post.title}</a></li>) }
        </ul>
      </div>
    }

    return(
      <div>
        <h1>This is {this.state.category_name} category</h1>
        { htmlData }
      </div>
    )
  }
}

export default ShowCategory;
