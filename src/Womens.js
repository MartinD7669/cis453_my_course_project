import React, {Component} from 'react';
import Products from './components/Products';
import Flexbox from 'flexbox-react';
import WomenEveryday1 from './images/WomenEveryday1.jpg';
import WomenEveryday2 from './images/WomenEveryday2.jpg';
import WomenEveryday3 from './images/WomenEveryday3.jpg';
import WomenHighend1 from './images/WomenHighend1.jpg';
import WomenHighend2 from './images/WomenHighend2.jpg';
import WomenHighend3 from './images/WomenHighend3.jpg';

class Womens extends Component{
    render(){
        return(
            <Flexbox className="flexbox" flexDirection="row" minHeight="75vh">
                 <Products
                    product= {{
                        imgUrl : WomenEveryday1,
                        name: "Classic Brown Leather",
                        price: "$40.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : WomenEveryday2,
                        name: "Simple Wear",
                        price: "$30.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : WomenEveryday3,
                        name: "Julius Simplicity",
                        price: "$45.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : WomenHighend1,
                        name: "Rose Gold Charm",
                        price: "$80.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : WomenHighend2,
                        name: "Golden Elegance",
                        price: "$75.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : WomenHighend3,
                        name: "Regal",
                        price: "$100.00"
                    }}
                />
            </Flexbox>
        )
    }
}

export default Womens;