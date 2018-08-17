import React from 'react';
import ProductForm from '../forms/productForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import  * as productActions from '../../actions/productActions';

const ProductPage = props => {    
    return(        
        <ProductForm 
            products = {props.products}
            productsActions = {props.productsActionsWithDispatch}
        />
    );
}

const mapStateToProps = state => {
    return {
      products: state.products
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        productsActionsWithDispatch: bindActionCreators(productActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);