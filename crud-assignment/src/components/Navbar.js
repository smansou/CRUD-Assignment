import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="ui attached stackable menu">
  <div className="ui container">
    <Link to={"/"} className="item">
      <i className="home icon"></i> Home
    </Link>
    <Link to={"/products"} className="item">
      <i className="grid layout icon"></i> Products
    </Link>
    <Link to={"/addItem"} className="item">
      <i className="add icon"></i> Add Item
    </Link>
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