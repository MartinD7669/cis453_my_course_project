import React, {Component} from "react";
import NavBar from "./NavBar";


class Main extends Component {
    render() {
        return(
            <div>
                <h1>Watch Emporium</h1>
                <h2>Welcome to Watch Emporium! Where you will find the best 
                    selection of watches for any occasion!</h2>
                   <p> 
                       <NavBar/>
                   </p>
            </div>
        )
    }
}

export default Main;