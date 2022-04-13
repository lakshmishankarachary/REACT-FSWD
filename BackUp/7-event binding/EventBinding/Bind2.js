import React, { Component, useDebugValue } from 'react'

export class Bind2 extends Component {
    state={
        emp_sal:30000
    }
    btnHandler=(value)=>{
        this.setState({
            emp_sal:30000+value
        })
    }
  render() {
    return (
      <div>
          <h1>Employee sal Component</h1><hr/>
          <h3>Employee sal:{this.state.emp_sal}</h3>
          <button onClick={this.btnHandler.bind(this,50000)}>HIke 50k</button>
          <hr/>
          <button onClick={this.btnHandler.bind(this,100000)}>HIke 100k</button>
          <hr/>
          <button onClick={this.btnHandler.bind(this,0)}>HIke 0k</button>
          <hr/>
      </div>
    )
  }
}

export default Bind2
