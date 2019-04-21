import React from 'react';
import Button from './AddToCartButton';
import ShowAlert from './Alert';
import {
    NavLink,
    Route
} from "react-router-dom";
import DetailedProductPage from './DetailedProductPage';

function Products(props){
    return (
        <div className="product">
                    <img src = {props.product.imgUrl} alt=''/>
                    <h3><NavLink to="/DetailedProductPage">{props.product.name}</NavLink></h3>
                    <Route path = "/DetailedProductPage" component= {DetailedProductPage}/>
                    <p>Price: {props.product.price}</p>
                    <Button button onClick={ShowAlert}>Add to Cart</Button>
        </div>
    )
}

export default Products;