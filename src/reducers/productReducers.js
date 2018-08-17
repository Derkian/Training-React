import { PRODUCT_LOADING, PRODUCT_LOADING_SUCESS, PRODUCT_POSTING, PRODUCT_POST_SUCESS } from "../constants/productTypes";
import initialState from './initialState';

export default function(state = initialState.products, action){
    
    switch (action.type) {
        case PRODUCT_LOADING:
            return Object.assign({}, state , { isLoading : action.payload });            
        case PRODUCT_LOADING_SUCESS:            
            return Object.assign({}, { items : action.payload } , { isLoading : false });                        
        case PRODUCT_POSTING:
            return Object.assign({}, state , {isPosting : action.payload});
        case PRODUCT_POST_SUCESS:
            return Object.assign({}, { items : [...state.items, action.payload] }, {isPosting : false});
        default:
            return state;
    }
}