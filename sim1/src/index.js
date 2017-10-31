import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ShelfA from './components/ShelfA';
import Addinv from './components/Addinv'
// import ShelfB from './components/ShelfB';
import Input from './components/Input';
// import Bin from './components/Bin';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path ='/' component ={ App } />
            <Route path = '/:shelf/:bin/addinv' component = { Addinv } />
            <Route path = '/:shelf/:bin' component = { Input } />
            
            <Route path = '/:shelf' component = { ShelfA } />
            
        </Switch>
    </Router>,
  document.getElementById('root')
);
registerServiceWorker();
