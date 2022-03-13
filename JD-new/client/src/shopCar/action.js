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
  const deleteShop=function(id){
    return function(dispatch){
      const url='/deleteShoppingCar'
      console.log(id)
      dispatch(axiosStart())
     axios.post(url,{id:id}).then(res=>console.log(res)).catch(err=>console.log(err))
    }
      
    
  }
  const axiosData = function () {
    return function (dispatch) {
      const url = '/getShoppingCar';
      dispatch(axiosStart());
      setTimeout(()=>{
        axios.get(url).then(value => {
           console.log(value.data)
      
            dispatch(axiosSuccess(value.data));
          })
            .catch(err => {
              dispatch(axiosFail(err));
            });
      },100)
    };
  };
  export { axiosFail, axiosSuccess, axiosStart, axiosData, deleteShop};
  