import React,{ Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class NonEdit extends Component{
    constructor(props){
        super(props);

        this.state={
            itemName: '',
            itemPrice: '',
            allowEdit: false
        }
        this.handleItemUpdate = this.handleItemUpdate.bind(this)
        this.handlePriceUpdate = this.handlePriceUpdate.bind(this)
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
        console.log(this.state)
        return(
            <div>
                
                <div className = 'inputright'>    
                     Name
                    <input 
                        placeholder = "Name"
                        value = { this.state.itemName }
                        onChange = { this.handleItemUpdate }
                        className = 'inputbox'
                        disabled>
                        
                    </input>
                    Price
                    <input
                        placeholder = "$0.00"
                        type = "number"
                        value = { this.state.itemPrice }
                        onChange = { this.handlePriceUpdate }
                        className = 'inputbox'
                        disabled>
                    </input>   
                </div>           
                <div className = 'row'>
                    
                    <div 
                        active = { this.state.active } 
                        onClick = { this.props.toggle }
                        className = 'edit'>Edit
                        
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