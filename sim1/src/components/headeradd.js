import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HeaderToo extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        
      return (
        <div className = 'binhead'>
            <div className = "logoHolder" >
            <Link to='/'><div className = "morelogo"></div></Link>
            </div>
            <Link to = {`/${this.props.shelf}`} 
                style = {{ textDecoration:'none', color:'white' }} >
                <div className = 'shelfname'>{this.props.shelf}</div>
            </Link>
                
            <div className = 'binname' >Add To {this.props.bin}</div>
                
            
        </div>
      );
    }
}
