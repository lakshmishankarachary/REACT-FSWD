import React, { Component } from 'react'

export class Login extends Component {
    state={
        email:"",
        password:""
    }
    updateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
      <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
              <label>Email:</label>
              <input type="text" onChange={this.updateHandler} name="email"/><br/>
              <label>Password:</label>
              <input type="text" onChange={this.updateHandler} name="password"/><br/>
              <input type="submit" value="Login"/>
              </form>
      </div>
    )
  }
}

export default Login