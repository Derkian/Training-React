import { PRODUCT_LOADING, PRODUCT_LOADING_SUCESS } from "../constants/productTypes";
import initialState from './initialState';

export default function(state = initialState.products, action){
    debugger;
    switch (action.type) {
        case PRODUCT_LOADING:
            return Object.assign({}, state , { isLoading : action.payload });            
        case PRODUCT_LOADING_SUCESS:
            let obj = Object.assign({}, [ ...state.items, action.payload ] , { isLoading : true });            
            return obj;
        default:
            return state;
    }
}