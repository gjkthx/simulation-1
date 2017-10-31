import React,{ Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Editable extends Component{
    constructor(props){
        super(props);

        this.state={
            itemName: '',
            itemPrice: '',
            allowEdit: true
        }
        this.handleItemUpdate = this.handleItemUpdate.bind(this)
        this.handlePriceUpdate = this.handlePriceUpdate.bind(this)
        this.uploadItem = this.uploadItem.bind(this)
        this.deleteInventoryItem = this.deleteInventoryItem.bind(this)
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
        this.props.toggle()
        console.log(`item ${this.state.itemName} with price of $${this.state.itemPrice} will be saved`)
        return axios({
            url:`/api/inventory/${this.props.params.shelf}/${this.props.params.bin}`,
            method:'put',
            data:{
                name: this.state.itemName,
                price: this.state.itemPrice
            }
        })
        .then( (response) => {
            // name : this.state.itemName
        })
        
    }
    getInventory(){
        return axios({
            url:`/api/inventory/${this.props.params.shelf}/${this.props.params.bin}`,
            method:'get'
        })
        .then( (response) => {
            console.log(response.data[0])
            this.setState({
                itemName: response.data[0].itemname,
                itemPrice: response.data[0].price
            })
            
        })
    }

    updateInventory(){
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
        .then( (response)=> {
            console.log(response);
            
        })
    }
    deleteInventoryItem(){
        return axios({
            url:`/api/inventory/${this.props.params.shelf}/${this.props.params.bin}`,
            method:'delete'
        })
        .then( (response) =>{
            console.log(response)
        })
    }

    componentDidMount(){
        this.getInventory()
    }

    render(){
        return(
            <div>
                <div className = 'inputright'>    
                        Name
                        <input 
                            placeholder = "Name"
                            value = { this.state.itemName }
                            onChange = { this.handleItemUpdate }
                            className = 'inputbox'>
                        </input>
                        Price
                        <input
                            placeholder = "$0.00"
                            type = "number"
                            value = { this.state.itemPrice }
                            onChange = { this.handlePriceUpdate }
                            className = 'inputbox'>
                        </input>   
                </div>  
                    <div className = 'row'>
                        
                        <div
                            display = 'none'
                            onClick = { this.uploadItem }
                            className = 'save'>Save
                        </div>

                        <div className = 'edit'
                            onClick = { this.deleteInventoryItem }>
                            <Link to = {`/${this.props.params.shelf}`} style = {{ textDecoration:'none',color: 'black' }}>
                                Delete
                            </Link>
                        </div>
                        
                    </div>
            </div>
        );
    }
}