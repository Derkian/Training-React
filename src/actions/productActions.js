import { PRODUCT_LOADING, PRODUCT_LOADING_SUCESS } from "../constants/productTypes";
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

export const productFetch = () =>{
    return (dispatch) =>{        
        dispatch(productLoading(true));

        performFetch("products")
            .then(products =>{
                dispatch(produtoFetchSucess(products));
            })
            .catch(error => {
                console.log(error);
            });
    }
}