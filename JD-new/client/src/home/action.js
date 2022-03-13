import {
  AXIOS_FAIL,
  AXIOS_START,
  AXIOS_SUCCESS,
  CHANGE_INDEX,
} from './actionType';
const axios = require('axios');

const axiosStart = function () {
  // console.log(111);
  return {
    type: AXIOS_START,
    data: [],
  };
};
const axiosSuccess = function (data) {
  return {
    type: AXIOS_SUCCESS,
    data: data,
  };
};
const axiosFail = function (err) {
  return {
    type: AXIOS_FAIL,
    data: err,
  };
};
const changeIndex = function (index) {
  return {
    type: CHANGE_INDEX,
    index: index,
  };
};
const axiosData = function () {
  return function (dispatch) {
    const url = '/list';
    dispatch(axiosStart());
    axios.get(url).then(value => {
      // console.log(value.data);
      dispatch(axiosSuccess(value.data));
    })
      .catch(err => {
        dispatch(axiosFail(err));
      });
  };
};
export { axiosFail, axiosSuccess, axiosStart, axiosData, changeIndex };
