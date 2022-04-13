import React, { Component } from 'react'

export class Login extends Component {
    state={
        email:"",
        password:""
    }
    updateemailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    updatepasswordlHandler=(event)=>{
        this.setState({password:event.target.value})
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
              <input type="text" onChange={this.updateemailHandler}/><br/>
              <label>Password:</label>
              <input type="text" onChange={this.updatepasswordlHandler}/><br/>
              <input type="submit" value="Login"/>
              </form>
      </div>
    )
  }
}

export default Login