import React from 'react';
import InputCustom from '../common/InputCustom';
import PropTypes from 'prop-types';

class ProductForm extends React.Component{

    state = {
        productsList : [],
        product : {
            productName : '',
            quantity : 0,
            price : 0
        }
    }

    componentDidMount(){
        this.props.productsActions.productFetch();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.products.isLoading && !this.isLoading)
            this.isLoading = true;

        if(!nextProps.products.isLoading && this.isLoading){
            this.isLoading = false;
            this.setState({ productsList : nextProps.products.items });
        }

        if(nextProps.products.isPosting && !this.isPosting)
            this.isPosting = true;

        if(!nextProps.products.isPosting && this.isPosting){
            this.isPosting = false;
            this.setState({ productsList : nextProps.products.items });
        }

        if(nextProps.products.idDeleting && !this.isDeleting){
          this.isDeleting = true;
        }

        if(!nextProps.products.idDeleting && this.isDeleting){
          this.isDeleting = false;
          this.setState({ productsList : nextProps.products.items });
        }
    }

    isLoading = false;
    isPosting = false;
    isDeleting = false;

    onChange = propertyName => event =>{
      this.setState( { product : Object.assign({},this.state.product, {[propertyName] : event.target.value}) } );
    }

    onClick = () => {
        //push new product
        this.props.productsActions.productPostFetch(this.state.product);
        //clean object product
        this.setState( { product : { productName : '', quantity : 0, price : 0 } });
    }

    onDelete = id =>{
      this.props.productsActions.productDelete(id);
    }

    render(){
        return(
            <div className="container">
                <div>
                    <InputCustom
                        label = {"Name : "}
                        inputCustomValue = {this.state.product.productName}
                        inputCustomOnChange = {this.onChange("productName")}
                    />
                </div>
                <div>
                    <InputCustom
                        label = {"Quantity : "}
                        inputCustomValue = {this.state.product.quantity}
                        inputCustomOnChange = {this.onChange("quantity")}
                    />
                </div>
                <div>
                    <InputCustom
                        label = {"Price : "}
                        inputCustomValue = {this.state.product.price}
                        inputCustomOnChange = {this.onChange("price")}
                    />
                </div>
                <div>
                    <button onClick={this.onClick}>Add Product</button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.productsList.map(item =>{
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.productName}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td><button onClick={() => this.onDelete(item.id)} >Excluir</button></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

ProductForm.propTypes = {
    productsActions : PropTypes.object,
    products : PropTypes.object
};

export default ProductForm;
