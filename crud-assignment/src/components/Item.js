import React, { Component } from 'react';
import { updateData } from '../api/api';
import AddItem from './AddItem';

class Item extends Component {
    constructor(){
        super();
        this.state={
            editing: false, 
            updated:{
                name:'',
                image: '',
                info: ''
            }
        }
    }
    handleEdit = () => {
        this.setState({editing: true});
    }
    handleCancel = () => {
        this.setState({editing: false});
    }
    
    render() {
    
        return (
            <div className='ui container'>
            {
            (this.state.editing) ?
                <>
                <AddItem editName={this.props.name} editImage={this.props.image} editInfo={this.props.info} />
                <button className='ui small red button' onClick={this.handleCancel}>Cancel</button>
                </>
                : 
                <div className='ui medium rounded image'>
                   <label>{this.props.name}</label>
                   <img  src={this.props.image}></img>
                   <div className='ui segment'>{this.props.info}</div>
                   <div className='ui container '>  
                    <button className='ui red button' onClick={this.props.deleteFunc} >Delete</button>
                    <button className='ui grey button' onClick={this.handleEdit} >Edit</button>
                    </div>
                </div> 
                }
                </div>
            
        );
    }
}

export default Item;
