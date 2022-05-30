import axios from 'axios';
import React, { Component } from 'react';
import Item from "./Item"
import { getAllData, deleteData, updateData } from '../api/api';
import Spinner from './Spinner';
import Navbar from './Navbar';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: []
        }
    }
    reRender = () =>{this.setState({renders: 1});}
    
    async componentDidMount() {
        try {
            const { data } = await getAllData();
            this.setState({ items: data, loading: false})
        } catch (e) {
            console.log(e);
        }
    }

    

    showData = () => {
        return this.state.items.map((item, i) => {
            return (
                <div key={i} className='item-div'>
                    <Item 
                    key={i} 
                    name={item.name} 
                    image={item.image} 
                    info={item.info} 
                    deleteFunc={()=>deleteData(item.id)}
                    unique={item.id}
                    />
                   
                </div>
            )
        })
    }

    render() {
        return (
            <>
            { this.state.loading ? <Spinner /> : 
            <div className='products-container'>
            {this.showData()}
            </div>
    }
            </>
        );
    }
}

export default Products;