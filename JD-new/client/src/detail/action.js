import {
  AXIOS_FAIL,
  AXIOS_START,
  AXIOS_SUCCESS
} from './actionType';
const axios = require('axios');

const axiosStart = function () {

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
const axiosPost = function (id) { //这个函数只负责给接口传递一个id，剩下的逻辑接口已经实现，不需要这个函数再传递reducer
  return function (dispatch) {
    const url = '/addShoppingCar'
    dispatch(axiosStart())
    axios.post(url, { id: id }).then(value => {

    })
      .catch(err => {

      });
  }
}
const axiosData = function (id) {
  return function (dispatch) {
    const url = '/getShop';
    dispatch(axiosStart());
    axios.post(url, { id: id }).then(value => {
      // console.log(value.data,'-----')
      if(value.data.length!==0){
        dispatch(axiosSuccess(value.data));

      }
    })
      .catch(err => {
        dispatch(axiosFail(err));
      });
  };
};
export { axiosFail, axiosSuccess, axiosStart, axiosData, axiosPost };
