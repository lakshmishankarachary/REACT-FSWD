import React, { Component } from 'react'
import {Link} from "react-router-dom"


export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/Home">React Routing</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Industry">Industry </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Platform">Platform</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Services">Services</Link>
      </li>
      
    </ul>
  </div>
</nav>
          </nav>
      </div>
    )
  }
}

export default Navbar