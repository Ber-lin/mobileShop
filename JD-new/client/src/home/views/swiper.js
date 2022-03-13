import React, { Component } from 'react';
// import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';
import {  axiosData, changeIndex } from '../action';
class Swiper extends Component {
  constructor(props) {
    super(props);
  }

  move() {
    var { index, data, change_index } = this.props;
    // console.log(index);
    index++;
    if (index >= data.length) {
      index = 0;
    }
    //改变完index dispatch到store中
    change_index(index);
  }

  handle(e) {
    var { change_index } = this.props;
    change_index(e);
    clearInterval(this.timer);
  }

  render() {
    var { data, index, change_index } = this.props;
    // console.log(data);
    return (
      <div>
        <div className="swiper-bgc">
          <div className="swiper-box">
            <ul className="swiper-list">
              {data.map((item, i) => {
                // console.log(item.listImg)
                return (
                  <li key={item._id} className={i == index ? 'active' : ''}>
                    <img src={item.listImg}></img>
                  </li>
                );
              })}
            </ul>
            <ul className="swiper-points">
              {data.map((item, i1) => {
                return (
                  <li
                    key={item._id}
                    onClick={() => {
                      this.handle(i1);
                    }}
                    className={i1 == index ? 'point' : ''}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // const {axios_success,axios_fail}=this.props
    // console.log(111);
    this.props.axios_data();

    this.timer = setInterval(() => {
      this.move();
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

const mapStateToProps = function (state, ownProps) {
  // console.log(state.home.data);
  return {
    index: state.home.index,
    data: state.home.data,
  };
};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    change_index: function (index) {
      dispatch(changeIndex(index));
    },
    axios_data: function () {
      dispatch(axiosData());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Swiper);
