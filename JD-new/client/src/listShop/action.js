import {
  AXIOS_FAIL,
  AXIOS_START,
  AXIOS_SUCCESS,
  CHANGE_INDEX,
  CHANGE_SHOP
} from './actionType';
const axios = require('axios');

const axiosStart = function () {

  return {
    type: AXIOS_START,
    listShop: [],
  };
};
const axiosSuccess = function (data) {
  return {
    type: AXIOS_SUCCESS,
    listShop: data,
  };
};
const axiosFail = function (err) {
  return {
    type: AXIOS_FAIL,
    listShop: err,
  };
};
const changeShop = function (name) {
  return {
    type: CHANGE_SHOP,
    shopName: name
  }
}
const changeIndex = function (index) {
  return {
    type: CHANGE_INDEX,
    index: index,
  };
};
const axiosData = function (name) {
  return function (dispatch) {
    const url = '/shop';
    dispatch(axiosStart());
    axios.post(url, { shopName: name }).then(value => {
      // console.log(value.data)

      dispatch(axiosSuccess(value.data));
    })
      .catch(err => {
        dispatch(axiosFail(err));
      });
  };
};
export { axiosFail, axiosSuccess, axiosStart, axiosData, changeIndex, changeShop };
