import React from 'react'

import Navbar1 from "./Navbar/Navbar1"
import Product1 from "./Product/Product1"

class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar1/>
            <Product1/>
            </div>
        )
    }
    
}
export default App