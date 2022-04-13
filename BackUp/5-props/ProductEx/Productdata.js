import React, { Component } from 'react'
import Product from './Product'
export class ProductData extends Component {
    product = {
        name: "Iphone 12 - Gray",
        price: 70000,
        store_Name: "Croma",
        del_Type: "Free Delivery",
        image:"https://rukminim2.flixcart.com/image/416/416/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70"
    }
    render() {
        return (
            <div>
                <h1>Product Data</h1>
                <hr />
                <Product p_Data={this.product} />
            </div>
        )
    }
}

export default ProductData