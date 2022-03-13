import {
    AXIOS_FAIL,
    AXIOS_START,
    AXIOS_SUCCESS,
    CHANGE_INDEX,
    CHANGE_SHOP
  } from './actionType';

export default function(state={index:0,listShop:[],shopName :'京东超市'},action){
    switch(action.type){
        case AXIOS_FAIL:{
            return {
                ...state,
                listShop:action.listShop
            }
        }
        case AXIOS_START:{
            return {
                ...state,
                listShop:action.listShop
            }
        }
        case AXIOS_SUCCESS:{
           
            return {
                ...state,
                listShop:action.listShop
            }
        }
        case CHANGE_INDEX:{
            return {
                ...state,
                index:action.index
            }
        }
        case CHANGE_SHOP:{
            return {
                ...state,
                shopName:action.shopName
            }
        }
        default :{
            return state
        }
    }
}