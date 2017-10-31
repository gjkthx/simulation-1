import React, { Component } from 'react';
import axios from 'axios';
import Headeradd from './headeradd';
import { Link } from 'react-router-dom';

export default class Addinv extends Component{
    constructor(props){
        super(props);

        this.state={
            itemName: '',
            itemPrice: '',
        
        }
        this.handleItemUpdate = this.handleItemUpdate.bind(this)
        this.handlePriceUpdate = this.handlePriceUpdate.bind(this)
        this.uploadItem = this.uploadItem.bind(this)
    }
    handleItemUpdate(event) {
        this.setState({
            itemName: event.target.value
        })
    }
    handlePriceUpdate(event) {
        this.setState({
            itemPrice: event.target.value
        })
    }
    uploadItem(){
        console.log(`item ${this.state.itemName} with price of $${this.state.itemPrice} will be saved`)
        return axios({
            url:`/api/inventory`,
            method:'post',
            data:{
                name: this.state.itemName,
                price: this.state.itemPrice,
                shelf: this.props.match.params.shelf,
                bin: this.props.match.params.bin
            }
        })
        .then( (response) => {
            console.log(response)
        })
        
    }
    render(){
        return(
            <div>
                <Headeradd 
                    shelf = { this.props.match.params.shelf }
                    bin = { this.props.match.params.bin }/>
                <div className = 'shelfholder'>
                    Name
                    <input 
                        placeholder = "Name"
                        value = { this.state.itemName }
                        onChange = { this.handleItemUpdate }
                        className = 'inputboxother'>       
                    </input>
                    Price
                    <input
                        placeholder = "$0.00"
                        type = "number"
                        value = { this.state.itemPrice }
                        onChange = { this.handlePriceUpdate }
                        className = 'inputboxother'>
                    </input>   
                    < div className= 'bigsave'
                        onClick = { this.uploadItem }>
                        <Link to = {`/${this.props.match.params.shelf}`} style = {{ textDecoration:'none',color: 'black' }}>
                            + Add Item to Inventory
                        </Link>
                     </div>
                </div>
        </div>
        );
    }
}