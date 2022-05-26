import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="ui attached stackable menu">
  <div className="ui container">
    <a className="item">
      <i className="home icon"></i> Home
    </a>
    <a className="item">
      <i className="grid layout icon"></i> Products
    </a>
    <a className="item">
      <i className="add icon"></i> Add Item
    </a>
    </div>
    <div className="right item">
      <div className="ui input">
          <input type="text" placeholder="Search..."/>
          </div>
    </div>
  </div>
        );
    }
}

export default Navbar;