import { AXIOS_FAIL, AXIOS_START, AXIOS_SUCCESS } from "./actionType";

export default function(state={cars:[]},action){
    switch(action.type){
        case AXIOS_START:{
            return {
                ...state,
                cars:action.data
            }
        }
        case AXIOS_FAIL:{
            return {
                ...state,
                cars:action.data
            }
        }
        case AXIOS_SUCCESS:{
            return {
                ...state,
                cars:action.data
            }
        }
        default :{
            return state
        }
    }
}