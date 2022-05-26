import axios from 'axios';
import React, { Component } from 'react';
import Item from "./Item"
import { getAllData, deleteData, updateData } from '../api/api';
import Spinner from './Spinner';
import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: []
        }
    }

    async componentDidMount() {
        try {
            const { data } = await getAllData();
            this.setState({ items: data, loading: false })
        } catch (e) {
            console.log(e);
        }
    }
    handleEdit(id){
    }

    showData = () => {
        return this.state.items.map((item, i) => {
            return (
                <div className='ui segment'>
                    <Item 
                    key={i} 
                    name={item.name} 
                    image={item.image} 
                    info={item.info} 
                    editFunc={this.handleEdit(item.id)} 
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
            <Navbar />
            <div className='app'>
                <nav className='ui navbar'>
                    <form onSubmit={e => e.preventDefault()}>
                    </form>
                </nav>
                {this.showData()}
            </div>
            </>
        );
    }
}

export default App;

