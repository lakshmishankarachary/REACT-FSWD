import React from 'react'
import Navbar from './Navbar/Navbar'
import Login1 from './Login1/Login1'
import Regi from './Login1/Regi'
import User from "./User/User"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

class App extends React.Component{
    render(){
    return (
        <div>
             <Router>
                <Navbar />
                <Routes>
                <Route path="/Login1" element={<Login1/>}/>
                <Route path="/Regi" element={<Regi/>}/>
                <Route path="/User" element={<User/>}/>
                </Routes>
            </Router>
          
        </div>
    )
}

}
export default App