import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './components/Title';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className='shelfholder'>
          <Link to='/ShelfA' style={{ textDecoration: 'none' }}><div className = "shelf" >Shelf A</div></Link>
          <Link to='/ShelfB' style={{ textDecoration: 'none' }}><div className = "shelf" >Shelf B</div></Link>
          <Link to='/ShelfC' style={{ textDecoration: 'none' }}><div className = "shelf" >Shelf C</div></Link>
          <Link to='/ShelfD' style={{ textDecoration: 'none' }}><div className = "shelf" >Shelf D</div></Link>
        </div>
        
      </div>
        
        
      
    );
  }
}

export default App;
