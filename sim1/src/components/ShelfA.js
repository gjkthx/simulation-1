import React, { Component } from 'react';
import Bin from './Bin';
import Header from './Header';


export default class ShelfA extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <Header shelf = { this.props.match.params.shelf }/>
                <Bin  shelf = { this.props.match.params.shelf }/>
            </div>
        );
    }
}