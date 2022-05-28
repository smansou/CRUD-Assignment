import React, { Component } from 'react';
import { updateData } from '../api/api';
import AddItem from './AddItem';

class Item extends Component {
    constructor() {
        super();
        this.state = {
            editing: false,
            updated: {
                name: '',
                image: '',
                info: ''
            }
        }
    }
    handleEdit = () => {
        this.setState({ editing: true });
    }
    handleCancel = () => {
        this.setState({ editing: false });
    }

    render() {

        return (
            <div className='item-container'>
                {
                    (this.state.editing) ?
                        <div className='edit-item'>
                            <i className='x icon x-icon' onClick={this.handleCancel}></i>
                            <AddItem editName={this.props.name} editImage={this.props.image} editInfo={this.props.info} iid={this.props.unique} />
                        </div>
                        :
                        <div className='ui medium rounded image'>
                            <label className='ui small header'>{this.props.name}</label>
                            <img src={this.props.image}></img>
                            <div className='ui segment'>{this.props.info}</div>
                            <div class="ui compact menu btn-menu">
                                <div class="ui simple dropdown item btn-menu">
                                    Edit                                    <i class="dropdown icon"></i>
                                    <div class="menu btn-menu">
                                        <div onClick={this.props.deleteFunc} class="ui red button btns">Delete</div>
                                        <div onClick={this.handleEdit} class="ui grey button btns">Edit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>

        );
    }
}


export default Item;
