import React, { Component } from 'react'

export class cart extends Component {
    state={
        product_name:"iphone 13",
        product_price:53000,
        image:"https://www.91-img.com/gallery_images_uploads/0/0/006f0e18ed68367a72fda211640be822ebc621f2.JPG?tr=h-550,w-0,c-at_max",
        qty:2

    }
  render() {
    return (
      <div>
          <div className="container mt-5">
    <div className="row">
        <div className="col-md-8">
            <table className="table table-hover">
               <thead className="bg-primary">
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>

                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.product_name}</td>
                        <td>
                            <img src={this.state.image} alt="" height="80px"/>
                        </td>
                        <td>{this.state.product_price}</td>
                        <td>
                        <i class="fa fa-minus-circle"></i>
                            {this.state.qty}
                        <i class="fa fa-plus-circle"></i>
                    
                            </td>
                            <td>{this.state.product_price*this.state.qty}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
    
    )
  }
}

export default cart