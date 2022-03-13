import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { Nav } from '../../home/index';
import PropTypes from 'prop-types';
// import Goback from './goback';
import ListBox from './listBox'


class listShop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var goback = this.props.history.goBack;
    // console.log(this.props)
    return (
      <div>
        <ListBox goback={goback}></ListBox>
        <Nav></Nav>
      </div>
    );
  }
}

export default listShop;
