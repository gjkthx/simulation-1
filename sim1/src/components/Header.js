import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class head extends Component {
//   constructor(props){
//     super(props)
// }
    render() {
      return (
        <div className = 'shelfhead'>
        <div className = "logoHolder" >
          <Link to='/'><div className = "morelogo"></div></Link>
        </div>
          <div className = 'shelfname' >{this.props.shelf}</div>
        </div>
      );
    }
}
