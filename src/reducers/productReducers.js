import { PRODUCT_LOADING, PRODUCT_LOADING_SUCESS, PRODUCT_POSTING, PRODUCT_POST_SUCESS, PRODUCT_DELETE, PRODUCT_DELETE_SUCESS } from "../constants/productTypes";
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
        case PRODUCT_DELETE:
          return Object.assign({},state,{idDeleting : true});
        case PRODUCT_DELETE_SUCESS:
          debugger;
          let productList = [...state.items];
          let positionDeleting = productList.map(product => { product.Id }).indexOf(action.payload.Id);
          productList.splice(positionDeleting, 1);
          return Object.assign({}, state , { items : productList }, { idDeleting : false });
        default:
            return state;
    }
}
