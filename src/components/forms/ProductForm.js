import React from 'react';
import InputCustom from '../common/InputCustom';

class ProductForm extends React.Component{

    state = {
        productsList : [],
        product : {
            productName : '',
            quantity : 0,
            price : 0            
        }        
    }

    isLoading = false;
    isPosting = false;


    componentDidMount(){        
        this.props.productsActions.productFetch();
    }

    componentWillReceiveProps(nextProps){         
        if(nextProps.products.isLoading && !this.isLoading)
            this.isLoading = true;

        if(!nextProps.products.isLoading && this.isLoading){     
            debugger;       
            this.isLoading = false;
            this.setState({ productsList : nextProps.products.items })
        }

        if(nextProps.products.isPosting && !this.isPosting)
            this.isPosting = true;

        if(!nextProps.products.isPosting && this.isPosting){     
            debugger;       
            this.isPosting = false;
            this.setState({ productsList : nextProps.products.items })
        }
    }

    onChangeName = event => {        
        this.setState( { product : Object.assign({},this.state.product, {productName : event.target.value}) } );
    }

    onChangeQuantity = event => {        
        this.setState( { product : Object.assign({},this.state.product, {quantity : event.target.value}) } );
    }

    onChangePrice = event => {        
        this.setState( { product : Object.assign({},this.state.product, {price : event.target.value}) } );
    }

    onClick = () =>{          
        //push new product      
        debugger;
        this.props.productsActions.productPostFetch(this.state.product);

        //this.setState( { productsList : [...this.state.productsList, this.state.product] });
        //clean object product
        this.setState( { product : { productName : '', quantity : 0, price : 0 } });

        
    }

    render(){
        return(
            <div className="container">
                <div>
                    <InputCustom
                        label = {"Name : "}
                        inputCustomValue = {this.state.product.productName}
                        inputCustomOnChange = {this.onChangeName}
                    />                    
                </div>
                <div>
                    <InputCustom
                        label = {"Quantity : "}
                        inputCustomValue = {this.state.product.quantity}
                        inputCustomOnChange = {this.onChangeQuantity}
                    />                    
                </div>
                <div>
                    <InputCustom
                        label = {"Price : "}
                        inputCustomValue = {this.state.product.price}
                        inputCustomOnChange = {this.onChangePrice}
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
                            </tr>
                        </thead>
                        <tbody>
                            {                                
                                this.state.productsList.map(item =>{                                    
                                    return(                                                                                
                                        <tr>
                                            <td>{item.productName}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
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

export default ProductForm;