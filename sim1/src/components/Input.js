import React, { Component } from 'react';

import HeaderToo from './HeaderToo';
import Editable from './EditAble';
import NonEdit from './NonEdit';

export default class Input extends Component{
    constructor(props){
        super(props);

        this.state={
            itemName: '',
            itemPrice: '',
            editable: false
        }
        this.handleItemUpdate = this.handleItemUpdate.bind(this)
        this.handlePriceUpdate = this.handlePriceUpdate.bind(this)
        this.uploadItem = this.uploadItem.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }
    
    toggleEdit(){
        // console.log("hello")
        this.setState({
            editable:!this.state.editable
        })
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
                    { this.state.editable
                    ?
                        <Editable toggle = { this.toggleEdit } params = {this.props.match.params} />
                    :
                        <NonEdit toggle = { this.toggleEdit }  params = {this.props.match.params}/>
                    }
            </div>
        );
    }
}