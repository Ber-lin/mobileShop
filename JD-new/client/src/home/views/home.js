import React, { Component } from 'react';
// import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import axios from 'axios';
import Swiper from './swiper';
import List from './list';
import Nav from './nav';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 轮播图 列表 导航栏
    return (
      <div style={{ position: 'fixed' }}>
        <Swiper></Swiper>
        <List></List>
        <Nav></Nav>
      </div>
    );
  }
}
export default Home;
