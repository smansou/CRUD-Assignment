import React, { Component } from 'react';
import { updateData, AddData } from '../api/api';

class AddItem extends Component {
    constructor(){
        super();
        this.state={
            productName:'',
            imageURL:'',
            description:''
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name: this.state.productName ,
            image: this.state.imageURL,
            info: this.state.description
        }
        AddData(item);
    }


    render() {


        return (
            <form onSubmit={this.handleSubmit} className="ui form">
  <div className="field">
    <label>Product Name</label>
    <input 
    type="text" 
    name="productName" 
    placeholder="Product Name"
    onChange={this.handleChange}
    value={this.props.editName}
    />

  </div>
  <div className="field">
    <label>Image URL</label>
    <input 
    type="text" 
    name="imageURL" 
    placeholder="URL"
    onChange={this.handleChange}
    value={this.props.editImage}

    />
  </div>
  <div className="field">
  </div>
  <div className="field">
    <label>Description</label>
    <input 
    type="text" 
    name="description" 
    placeholder="Enter Product Description"
    onChange={this.handleChange}
    value={this.props.editInfo}

    />
  </div>
  <div className="field">
  </div>
  <button className="ui button" type="submit">Submit</button>
</form>
        );
    }
}

export default AddItem;
