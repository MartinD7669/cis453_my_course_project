import React, {Component} from 'react';
import styled from 'styled-components';

const CartHeader = styled.h3`
    justify-content: center;
    top: 15%;
    text-align: center;
    margin-left: 5%;
    display: flex;
    font-family: Poppins;
    font-size: 20px;
    font-weight: bold;
    width: 100px;
    height: 25px;
    border-radius: 15px;
    background-color: #86c5f3;
`;

const CartDisplay = styled.p`
    background-color: #86c5f3;
    height: 200px;
    width: 500px;
    border-radius: 5px;
    font-size: 18px;
    text-align: top;
    margin-left: 25%;
    `;


class MyCart extends Component{
    render(){
        return(
            <div>
                <CartHeader>My Cart</CartHeader>
                <CartDisplay>Your cart is empty.</CartDisplay>
            </div>
        )
    }
}

export default MyCart;