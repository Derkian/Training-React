import { PRODUCT_LOADING, PRODUCT_LOADING_SUCESS } from "../constants/productTypes";
import initialState from './initialState';

export default function(state = initialState.products, action){
    
    switch (action.type) {
        case PRODUCT_LOADING:
            return Object.assign({}, state , { isLoading : action.payload });            
        case PRODUCT_LOADING_SUCESS:            
            return Object.assign({}, { items : action.payload } , { isLoading : false });                        
        default:
            return state;
    }
}