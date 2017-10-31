import React, { Component } from 'react';
import Bin from './Bin';
import Header from './Header';

export default class ShelfB extends Component{
    render(){
        return(
            <div>
                <Header />
                <Bin />
            </div>
        );
    }
}