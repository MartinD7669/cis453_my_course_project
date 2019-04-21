import React, {Component} from 'react';
import styled from 'styled-components';

const CartHeader = styled.h3`
    position: absolute;
    top: 15%;
    text-align: center;
    left: 50%;
    right: 50%;

`;

class MyCart extends Component{
    render(){
        return(
            <CartHeader>My Cart</CartHeader>
        )
    }
}

export default MyCart;