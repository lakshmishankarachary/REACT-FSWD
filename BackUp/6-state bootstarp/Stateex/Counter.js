import React, { Component } from 'react'

export class Counter extends Component {
    state={
        counter:1
    }
    incrCounterHandler=()=>{
        this.setState({counter:this.state.counter+1})
    }
    decrCounterHandler=()=>{
        this.setState({counter:this.state.counter-1})
    }
  render() {
    return (
      <div>
          <h1>counter value:{this.state.counter}</h1>
          <button onClick={this.incrCounterHandler}>Increment Counter</button>
          <button onClick={this.decrCounterHandler}>Decrement Counter</button>
      </div>
    )
  }
}

export default Counter