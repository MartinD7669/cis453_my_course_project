import React, {Component} from "react";
import styled from 'styled-components';
import Flexbox from 'flexbox-react';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import All from "./All";
import MensWatches from "./Mens";
import WomensWatches from "./Womens";

const Nav = styled.button`

    font-family: Merriweather Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: normal;
    text-align: center;
    max-width: 900px;
    background: #A7EEEA 75%;
    border-radius: 25px;
`;

class NavBar extends Component{
    render() {
        return(
        <HashRouter>
            <ul className="header">
            <Flexbox className="flexbox" flexDirection="row">
                <Nav><NavLink to="/All">All</NavLink></Nav>
                <Nav><NavLink to="/Mens">Men's Watches</NavLink></Nav>
                <Nav><NavLink to="/Womens">Women's Watches</NavLink></Nav>
                </Flexbox>
            </ul>
            <div className="content">
                <Route path="/All" component={All}/>
                <Route path="/Mens" component={MensWatches}/>
                <Route path="/Womens" component={WomensWatches}/>
            </div>
        </HashRouter>
        )
    }
}

export default NavBar;