import { reducer as homeReducer } from './home/index';
import { reducer as listReducer } from './listShop/index';
import {reducer as shopReducer} from './detail/index'
import {reducer as carReducer} from './shopCar/index'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkmiddleware from 'redux-thunk';
const middlewears = [thunkmiddleware];
const win = window;
const storeEnhancers = compose(
  applyMiddleware(...middlewears),
  win && win.devToolsExtension ? win.devToolsExtension() : f => f
);
// console.log(homeReducer);
const reducer = combineReducers({
  home: homeReducer,
  list:listReducer,
  shop:shopReducer,
  car:carReducer
});

export default createStore(reducer, {}, storeEnhancers);
