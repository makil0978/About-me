import React from 'react';
import Email from './icons/email.png'
import Phone from './icons/phone.png'
import Github from './icons/github.png'
import Linkedin from './icons/linkedin.png'
import './footer.css'
const Footer = () =>{



    return(
        <div className="footer">
            <a><img src={Email}    className="icon" alt="ico"/></a>
            <a><img src={Phone}    className="icon" alt="ico"/></a>
            <a><img src={Github}   className="icon" alt="ico"/></a>
            <a><img src={Linkedin} className="icon" alt="ico"/></a>
        </div>
    )
}
export default Footer

