import React, { Component } from 'react';

class Footer extends Component {
  goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  render() {
    return (
      <footer className="blog-footer">
        <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        <p>
          <a href='javascipt:void(0)' onClick={this.goToTop}>Back to top</a>
        </p>
      </footer>
    )
  }
}

export default Footer;
