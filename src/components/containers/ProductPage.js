import React from 'react';
import ProductForm from '../forms/ProductForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as productActions from '../../actions/productActions';
import PropTypes from 'prop-types';

const ProductPage = props => {    
    return(        
        <ProductForm 
            products = {props.products}
            productsActions = {props.productsActionsWithDispatch}
        />
    );
};

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

ProductPage.propTypes = {
    products : PropTypes.object,
    productsActionsWithDispatch : PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);