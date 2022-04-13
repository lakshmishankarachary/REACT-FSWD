import React, { Component } from 'react'
import Navbar from "./Navbar/Navbar"
import ContactApp from './ContactApp/ContactApp'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path="/Contacts" element={<ContactApp/>}/>
              </Routes>
          </Router>
      </div>
    )
  } 
}

export default App