import React, { Component } from 'react';

import Header from './Header';
import HeaderToo from './HeaderToo';
import NumericInput from 'react-numeric-input';

export default class Input extends Component{
    constructor(props){
        super(props);

        this.state={
            itemName: '',
            itemPrice: '',
            allowEdit: false
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
    }
    
    render(){
        return(
            <div>
                <HeaderToo 
                    shelf = { this.props.match.params.shelf }
                    bin = { this.props.match.params.bin }
                />
                    <div className ='inputleft' >
                        <div className = "blackbox" />
                    </div>
                    {/* add buttons (edit/delete and save/delete in their places) */}
                    {/* break into two components editable and noneditable */}
                    { this.state.allowEdit
                    ?
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

                        <div className = 'edit'>Delete</div>
                        
                    </div>
                    </div>
                    :
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
                            onClick = { (event) =>  this.setState({ allowEdit: true }) }
                            className = 'edit'>Edit
                            
                        </div>
                        

                        <div className = 'edit'>Delete</div>
                        
                    </div>
                </div>}
            </div>
        );
    }
}

import React, { Component } from 'react';

import Header from './Header';
import HeaderToo from './HeaderToo';
import NumericInput from 'react-numeric-input';
import Editable from './EditAble';
import NonEdit from './NonEdit';

export default class Input extends Component{
    constructor(props){
        super(props);

        this.state={
            itemName: '',
            itemPrice: '',
            allowEdit: false
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
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <HeaderToo 
                    shelf = { this.props.match.params.shelf }
                    bin = { this.props.match.params.bin }/>
                    <div className ='inputleft' >
                        <div className = "blackbox" />
                    </div>
                        {/* add buttons (edit/delete and save/delete in their places) */}
                        {/* break into two components editable and noneditable */}
                    { this.state.allowEdit
                    ?
                    <Editable />
                    :
                    <NonEdit />
                    }
            </div>
        );
    }
}