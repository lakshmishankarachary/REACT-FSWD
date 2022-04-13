import React from "react"
class Product extends React.Component{
    render(){
      return( <div>
          <h1>Product Component</h1>
          <pre>{JSON.stringify(this.props)}</pre>
          <div class="container">
    <div className="row">
        <div className="col-md-2">
            <div className="card">
                <div className="card-header">
                  <img src={this.props.p_Data.image} alt=""/>
                </div>
                <div className="card-body">
                <h6>{this.props.p_Data.name}</h6>
                <h6>{this.props.p_Data.price}</h6>
                <h6>{this.props.p_Data.store_Name}</h6>
                <h6>{this.props.p_Data.del_Type}</h6>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
      )
    }

}
export default Product
