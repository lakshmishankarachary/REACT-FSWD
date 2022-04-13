import React, { Component } from 'react'

export class Message extends Component {
    state={
        Message:"Hello"
    }
    updateMessage=(value)=>{
        this.setState({Message:value})
    }
  render() {
    return (
      <div>
          <h1>Message Component</h1>
          <h2>Message:{this.state.Message}</h2>
          <button onClick={this.updateMessage.bind(this,"Good Morning")}>GM</button>
          <button onClick={this.updateMessage.bind(this,"Good Afternoon")}>GA</button>
          <button onClick={this.updateMessage.bind(this,"Good night")}>GN</button>

      </div>
    )
  }
}

export default Message