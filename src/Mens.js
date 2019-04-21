import React, {Component} from 'react';
import Products from './components/Products';
import Flexbox from 'flexbox-react';
import MenEveryday1 from './images/MenEveryday1.jpg';
import MenEveryday2 from './images/MenEveryday2.jpg';
import MenEveryday3 from './images/MenEveryday3.jpg';
import MenHighend1 from './images/MenHighend1.jpg';
import MenHighend2 from './images/MenHighend2.jpg';
import MenHighend3 from './images/MenHighend3.jpg';

class Mens extends Component{
    render() {
        return(
            <Flexbox className="flexbox" flexDirection="row" minHeight="75vh">
                <Products
                    product= {{
                        imgUrl : MenEveryday3,
                        name: "Hiking Wear",
                        price: "$50.00"
                    }}
                />
                
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
            </Flexbox>
        )
    }
}

export default Mens;