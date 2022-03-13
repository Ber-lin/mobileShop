// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
// import axios from 'axios';
import {listShop} from './listShop/index';
import {Shop} from './detail/index';
import {Shoppingcar} from './shopCar/index'
// import Login from './component/login';
import { Home } from './home/index';
import {Login} from './login/index'
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/sort" exact component={listShop}></Route>
          <Route path='/shop/:id' component={Shop}></Route>
          <Route path='/shoppingCar' component={Shoppingcar}></Route>
          <Route path='/login' component={Login}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
