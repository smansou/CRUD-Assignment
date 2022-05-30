import React, { Component } from 'react';
import { updateData, AddData } from '../api/api';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            disabled:true,
            productName:this.props.editName,
            imageURL:this.props.editImage,
            description:this.props.editInfo
        }
    }


    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value, disabled: false})
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({disabled: true})
        const item = {
            name: this.state.productName,
            image: this.state.imageURL,
            info: this.state.description
        }
       updateData(this.props.iid, item).then(()=>window.location.reload(false));  //!replace
       this.setState({name: item.name, image: item.image, info: item.info})
       
  
    
    }
 


    render() {


        return (
        <form onSubmit={this.handleSubmit} className="ui form form-container">
  <div className="field">
    <label>Product Name</label>
    <input 
    type="text" 
    name="productName" 
    placeholder="Product Name"
    onChange={this.handleChange}
    value={this.state.productName || ''}
    />

  </div>
  <div className="field">
    <label>Image URL</label>
    <input 
    type="text" 
    name="imageURL" 
    placeholder="URL"
    onChange={this.handleChange}
    value={this.state.imageURL || ''}

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
    value={this.state.description || ''}

    />
  </div>
  <div className="field">
  </div>
  <button className="ui button" type="submit" disabled={this.state.disabled}>Submit</button>
</form>
        );
    }
}

export default AddItem;
