import React, { Component } from 'react'

export class Message extends Component {
    state={
        Message:"Hello"
    }
    updateHandler=()=>{
        this.setState({Message:"Good Morning"})
    }
  render() {
    return (
      <div>
         <h1>Message Component</h1>
           <h3>Message:{this.state.Message}</h3>
           <button onClick={this.updateHandler}>Good Morning</button>
          </div>
    )
  }
}

export default Message