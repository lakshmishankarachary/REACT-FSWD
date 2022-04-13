import React from 'react'
import Navbar from "./Navbar/Navbar"
import Album from './List Rendering/Album'
class App extends React.Component{
    render(){
        return <div>
           <Navbar/>
           <Album/>
           </div>
        
    }

}   
export  default App