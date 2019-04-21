import React from 'react';
import Button from './AddToCartButton';
import ShowAlert from './Alert';


function Products(props){
    return (
        <div className="product">
                    <img src = {props.product.imgUrl} alt=''/>
                    <h3>{props.product.name}</h3>
                    <p>Price: {props.product.price}</p>
                    <Button button onClick={ShowAlert}>Add to Cart</Button>
        </div>
    )
}

export default Products;