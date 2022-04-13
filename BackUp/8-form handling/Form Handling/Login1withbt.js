import React, { Component } from 'react'

export class Login extends Component {
    state={
        email:"",
        password:""
    }
    updateemailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    updatepasswordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submithandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
      <div>
          <div className="container">
          <pre>{JSON.stringify(this.state)}</pre>
    <div className="row">
        
        <div className="col-md-6">
            <form onSubmit={this.submithandler}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Email-Id" onChange={this.updateemailHandler}/>

            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Password" onChange={this.upadtepasswordHandler}/>

            </div> 
            <button className="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</div>
      </div>
    )
  }
}

export default Login