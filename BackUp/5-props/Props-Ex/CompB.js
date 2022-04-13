import React from "react"
class CompB extends React.Component{
    render(){
        return(
        <div>
            <h1>Compnent B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>Employee Name:{this.props.emp_details.name}</h4>
            <h4>Employee Id:{this.props.emp_details.id}</h4>
            <h4>Employee Sal:{this.props.emp_details.sal}</h4>
        </div>
        )
    }

}
export default CompB