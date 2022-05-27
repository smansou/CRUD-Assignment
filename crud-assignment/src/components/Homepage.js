import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div className='middle-div'>
            <div className="ui vertical center aligned segment">
            <nav className="ui container">
              <h1 className="ui header">Shoes</h1>
              <div className="ui borderless  compact menu">
                
              </div>
            </nav>
            <div className="ui content container">
              <h1 className="ui  header">Welcome to the store dashboard</h1>
              <p>
                Please navigate to the desired page
              </p>
              <div className="ui medium button">Learn more</div>
            </div>
            
          </div>
          </div>
        );
    }
}

export default Homepage;