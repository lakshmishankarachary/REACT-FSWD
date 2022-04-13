import React from "react"
import CompB from "./CompB"
class CompA extends React.Component{
    emp = { id: 101, name: "Rahul Gandi", sal: 45000 }
    render(){
        return(
        <div>
          <h1>Component A</h1>
          <hr/>
          <CompB emp_details={this.emp}/>
        </div>
        )
    }

}
export default CompA