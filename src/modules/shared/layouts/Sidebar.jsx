import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return(
      <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-light rounded">
          <h4 className="font-italic">About</h4>
          <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>

        <div className="p-3">
          <h4 className="font-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li><a href={null}>March 2014</a></li>
            <li><a href={null}>February 2014</a></li>
            <li><a href={null}>January 2014</a></li>
            <li><a href={null}>December 2013</a></li>
            <li><a href={null}>November 2013</a></li>
            <li><a href={null}>October 2013</a></li>
            <li><a href={null}>September 2013</a></li>
            <li><a href={null}>August 2013</a></li>
            <li><a href={null}>July 2013</a></li>
            <li><a href={null}>June 2013</a></li>
            <li><a href={null}>May 2013</a></li>
            <li><a href={null}>April 2013</a></li>
          </ol>
        </div>

        <div className="p-3">
          <h4 className="font-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href={null}>GitHub</a></li>
            <li><a href={null}>Twitter</a></li>
            <li><a href={null}>Facebook</a></li>
          </ol>
        </div>
      </aside>
    )
  }
}

export default Sidebar;
