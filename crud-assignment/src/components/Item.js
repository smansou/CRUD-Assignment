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
    handleDelete = () => {
        this.props.deleteFunc();
        window.location.reload(false);
    }

    render() {

        return (
            <div className='item-container'>
                {
                    (this.state.editing) ?
                        <div className='edit-item'>
                            <i className='x icon x-icon' onClick={this.handleCancel}></i>
                            <AddItem
                                editName={this.props.name}
                                editImage={this.props.image}
                                editInfo={this.props.info}
                                iid={this.props.unique}
                            />
                        </div>
                        :
                        <div className='item-inner-container-not-editing'>
                            <label className='ui small header'>{this.props.name}</label>
                            <div className="flex-wrapper">
                            <img className='item-image' src={this.props.image}></img>
                                    <div className="btn-menu">
                                        <div onClick={this.handleDelete} className="btns">Delete</div>
                                        <div onClick={this.handleEdit} className=" btns">Edit</div>
                                    </div>
                                    </div>
                            <div className='ui segment'>{this.props.info}</div>
                                
                                   

                             
                        </div >
                }
            </div>

        );
    }
}

{/* <div class="ui small fade reveal image">
    <img class="visible content" src={this.props.image} />
    <div class="hidden content">
        <div className="menu btn-menu">
            <div onClick={this.handleDelete} className="ui red button btns">Delete</div>
            <div onClick={this.handleEdit} className="ui grey button btns">Edit</div>
        </div>
    </div>
</div> */}



export default Item;
