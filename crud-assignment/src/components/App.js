import axios from 'axios';
import React, { Component } from 'react';
import Item from "./Item"
import { getAllData, deleteData, updateData } from '../api/api';
import Spinner from './Spinner';
import Navbar from './Navbar';
import Products from './Products';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AddItem from './AddItem';
import Homepage from './Homepage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [] 
        }
    }


    render() {
        return (
        
            <div className='app'>
                <BrowserRouter>
                <Navbar />
                <Route path={"/products"} exact component={Products}/>
                <Route path={"/addItem"} exact component={AddItem}/>
                <Route path={"/"} exact component={Homepage}/>
                </BrowserRouter>
                
            </div>
        
        );
    }
}

export default App;

