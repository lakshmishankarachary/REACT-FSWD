import React from 'react'
import Actress from './Actress/Actress'
import Hero from './Hero/Hero'
class App extends React.Component{
    render(){
        return <div>
                  <Hero/>
               <Actress/>
        </div>
    }

}   
export  default App