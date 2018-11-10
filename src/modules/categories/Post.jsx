import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <article id="post-71" className="column flex post-71 post type-post status-publish format-standard has-post-thumbnail hentry category-business tag-results tag-team">
        <div className="post-inner flex flex-column">
          <a href="https://demo.apalodi.com/kutak/business/you-should-empower-your-team/" className="post-media">
            <div style={{backgroundImage: "url('https://demo.apalodi.com/kutak/wp-content/uploads/sites/3/2018/10/simon-maage-706908-unsplash-1200x700.jpg')", backgroundRepeat: 'no-pepeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}
              className="post-image preload-bg-image bg-image lazy-load-bg-img is-loaded is-ready" data-src="https://demo.apalodi.com/kutak/wp-content/uploads/sites/3/2018/10/simon-maage-706908-unsplash-1200x700.jpg"></div>
          </a>
          <div className="post-content flex-grow">
            <div className="post-cats">
              <div className="post-cat"><a href="https://demo.apalodi.com/kutak/category/business/" rel="category tag">Business</a></div>
            </div>
            <a href="https://demo.apalodi.com/kutak/business/you-should-empower-your-team/">
              <h2 className="post-title">You should empower your team</h2>
              <p>If you manage other people, the first thing you need to understand is that your success depends on their success</p>
            </a>
          </div>
          <div className="post-footer">
            <span className="post-read-time">3 min read</span>
            <span className="post-date">October 4, 2018</span>
          </div>
        </div>
      </article>
    )
  }
}

export default Post;
