import { PRODUCT_LOADING, PRODUCT_LOADING_SUCESS, PRODUCT_POSTING, PRODUCT_POST_SUCESS, PRODUCT_DELETE, PRODUCT_DELETE_SUCESS } from "../constants/productTypes";
import { performFetch } from "../constants/apiBase";


export const productLoading = (isLoading) =>{
    return {
        type : PRODUCT_LOADING,
        payload : isLoading
    };
};

export const produtoFetchSucess = (productList) =>{
    return {
        type : PRODUCT_LOADING_SUCESS,
        payload : productList
    };
};

export const productPosting = (isPosting) =>{
    return {
        type : PRODUCT_POSTING,
        payload : isPosting
    };
};

export const produtoPostSucess = (product) =>{
    return {
        type : PRODUCT_POST_SUCESS,
        payload : product
    };
};

export const productDeleting = (isDeleting) =>{
  return {
    type : PRODUCT_DELETE,
    payload : isDeleting
  };
};

export const productDeleteSucess = (product) =>{
  return {
    type : PRODUCT_DELETE_SUCESS,
    payload : product
  };
};

export const productFetch = () =>{
    return (dispatch) =>{
        dispatch(productLoading(true));

        performFetch("products")
            .then(products =>{
                dispatch(produtoFetchSucess(products));
            });
    };
};

export const productPostFetch = (objProduct) =>{
    return (dispatch) =>{
        dispatch(productPosting(true));

        performFetch("products", { method : "POST", body : JSON.stringify( objProduct ) } )
            .then(product =>{
                dispatch(produtoPostSucess(product));
            });
    };
};

export const productDelete = (productId) =>{
  return (dispatch) => {

    dispatch(productDeleting(true));

    performFetch(`products/${productId}`, { method : "DELETE" } )
    .then(product =>{
        dispatch(productDeleteSucess(product));
    });
  };
};


