import React from 'react'
class Navbar extends React.Component{
    render(){
        return(
             <nav className="navbar navbar-dark bg-dark">
                 <a href="root" className="navbar-brand">React Component</a>
                 <div className='ml-auto'>
                   <ul className='navbar-nav'>
        <li className="nav-item"> <a href="root" className="nav-link"> Home</a></li>
     <li className="nav-item"> <a href="root" className="nav-link"> About Us</a></li>
    <li className="nav-item"> <a href="root" className="nav-link"> Contact US</a></li>
                   </ul>
                 </div>
             </nav>
        )
    }
}
export default Navbar