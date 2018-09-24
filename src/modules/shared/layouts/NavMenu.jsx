import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return(
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <a className="p-2 text-muted" href='javascipt:void(0)'>World</a>
          <a className="p-2 text-muted" href={null}>U.S.</a>
          <a className="p-2 text-muted" href={null}>Technology</a>
          <a className="p-2 text-muted" href={null}>Design</a>
          <a className="p-2 text-muted" href={null}>Culture</a>
          <a className="p-2 text-muted" href={null}>Business</a>
          <a className="p-2 text-muted" href={null}>Politics</a>
          <a className="p-2 text-muted" href={null}>Opinion</a>
          <a className="p-2 text-muted" href={null}>Science</a>
          <a className="p-2 text-muted" href={null}>Health</a>
          <a className="p-2 text-muted" href={null}>Style</a>
          <a className="p-2 text-muted" href={null}>Travel</a>
        </nav>
      </div>
    )
  }
}

export default NavMenu;
