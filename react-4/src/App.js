import React, { Component } from 'react'
import Navbar from "./Navbar/Navbar"
import ContactApp from './ContactApp/ContactApp'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <Navbar/>
              <Routes>
              <Route path="/contacts" element={<ContactApp/>}/>
              <Route path="/home" element={<Home/>}/>

              </Routes>
          </Router>
      </div>
    )
  } 
}

export default App