import {
  AXIOS_FAIL,
  AXIOS_START,
  AXIOS_SUCCESS,
  CHANGE_INDEX,
} from './actionType';
export default function (state = { data: [], index: 0 }, action) {
  //   console.log(action.data);
  switch (action.type) {
    case AXIOS_START: {
      //   console.log('start');
      return {
        ...state,
        // data:state.data,

        data: action.data,
      };
    }
    case AXIOS_SUCCESS: {
        // console.log(action.data,'home');
      return {
        ...state,
        // data:state.data,
        data: action.data,
      };
    }
    case AXIOS_FAIL: {
      //   console.log('fail');
      return {
        ...state,
        // data:state.data,

        data: action.data,
      };
    }
    case CHANGE_INDEX: {
      //   console.log('index');
      return {
        ...state,
        // data:state.data,

        index: action.index,
      };
    }
    default: {
      //   console.log('default');
      return state;
    }
  }
}
