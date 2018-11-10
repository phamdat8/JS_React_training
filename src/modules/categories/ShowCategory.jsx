import React, { Component } from 'react';
import Post  from './Post';
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
      htmlData = posts.map(post => <Post key={post.id} post />);
    }

    return(
      <div>
        <div className="site-heading">
          <div className="container">
            <div className="term-heading align-middle align-justify">
              <div className="term-header">
                <h1>{this.state.category_name}</h1>
                <p>The meaning behind the meetings</p>
              </div>
              <div className="term-count">
                <span>5</span>Articles
              </div>
            </div>
          </div>
        </div>

        <div id="content" className="site-content container">
          <div id="primary" className="content-area">
            <div className="posts-container">
              <div className="row">
                { htmlData }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowCategory;
