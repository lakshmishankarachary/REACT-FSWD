import React from "react"
class Emp extends React.Component {
  render() {
    return (
      <div>
          <h1>Emp Component</h1>
          <pre>{JSON.stringify(this.props)}</pre>
          <h4>Emp name:{this.props.name}</h4>
          <h4>Emp Id:{this.props.id}</h4>
          <h4>Emp loc:{this.props.location[0]}</h4>
          <h4>Emp details:{this.props.details.sal}</h4>

      </div>
    )
  }
}
export default Emp
