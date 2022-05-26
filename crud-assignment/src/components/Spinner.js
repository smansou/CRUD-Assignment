import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div class="ui segment">
            <div class="ui active inverted dimmer">
              <div class="ui small text loader">Loading</div>
            </div>
            <p></p>
          </div>
        );
    }
}

export default Spinner;