import React from 'react'
import Navbar from "./Navbar/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Service from "./components/Service"
import Contact from "./components/Contact"

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

class App extends React.Component{
    render(){
        return(
            <div>
            <Router>
                <Navbar/>
                <Routes>
          
                
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </Router>
            </div>
        )
    }
    
}
export default App