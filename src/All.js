import React, {Component} from 'react';
import Products from './components/Products';
import Flexbox from 'flexbox-react';
import MenEveryday1 from './images/MenEveryday1.jpg';
import MenEveryday2 from './images/MenEveryday2.jpg';
import MenEveryday3 from './images/MenEveryday3.jpg';
import MenHighend1 from './images/MenHighend1.jpg';
import MenHighend2 from './images/MenHighend2.jpg';
import MenHighend3 from './images/MenHighend3.jpg';
import WomenEveryday1 from './images/WomenEveryday1.jpg';
import WomenEveryday2 from './images/WomenEveryday2.jpg';
import WomenEveryday3 from './images/WomenEveryday3.jpg';
import WomenHighend1 from './images/WomenHighend1.jpg';
import WomenHighend2 from './images/WomenHighend2.jpg';
import WomenHighend3 from './images/WomenHighend3.jpg';

class All extends Component {
    render() {
        return(
            <Flexbox className="flexbox" flexDirection="row" minHeight="75vh">
                <Products
                    product= {{
                        imgUrl : MenEveryday1,
                        name: "Black Utility",
                        price: "$25.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : MenEveryday2,
                        name: "Digital",
                        price: "$45.00"
                    }}
                />
                
                <Products
                    product= {{
                        imgUrl : MenEveryday3,
                        name: "Hiking Wear",
                        price: "$50.00"
                    }}
                />
                <Products
                    product= {{
                        imgUrl : MenHighend1,
                        name: "Formal Metal",
                        price: "$60.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : MenHighend2,
                        name: "Winner Classic",
                        price: "$80.00"
                    }}
                />

                <Products
                    product= {{
                        imgUrl : MenHighend3,
                        name: "Harold Dark",
                        price: "$70.00"
                    }}
                />

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

export default All;