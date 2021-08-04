import React from 'react';
import Option from './options/Options';
import './navbar.css'
import logo from './logo.png'
const Navbar =()=>{
    const aboutMe = "About me"
    const contact = "Contact"
return(

    <div className="navbar">
        <a className="logo"><img src={logo} alt="k"></img></a>
        <div className="navbar-content">
            <Option value={aboutMe}/>
            <Option value={contact}/>
        </div>
    </div>
)
}

export default Navbar