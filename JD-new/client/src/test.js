import homeReducer from './home/index';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { axiosFail, axiosSuccess, changeIndex } from './home/action';

class AA extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fun: function () {
      dispatch();
    },
  };
};
export default connect()(AA);
