import React from 'react';
import Email from './icons/email.png'
import Phone from './icons/phone.png'
import Github from './icons/github.png'
import Linkedin from './icons/linkedin.png'
import './footer.css'
const Footer = () =>{

    

    const click = (props) =>{   
        if(document.querySelector(props.target.className) !== "zxc") {
         document.querySelector('.'+props.target.className + '.hovers').className="zxc";
        document.querySelector('body').className="opacity";
        const ty = document.querySelector(props.target.className)
        console.log(ty)
        }
    }

    return(
        <div className="footer">
                <div onClick={click}><img src={Email}    className="email" alt="ico"/>
                <div className="email hovers">
                    <p>kamil.jaworski0978@gmial.com</p>
                </div>
                </div>
                <div  onClick={click}><img src={Phone}   className="phone" alt="ico"/>
                <div className="phone hovers">
                    <p>+48 790 505 573</p>
                </div>
                </div>
                <a href="https://github.com/makil0978" target="_blank" rel="noreferrer"><img src={Github}   className="icon" alt="ico"/></a>
                <a href="https://www.linkedin.com/in/kamil-jaworski-772a25194/" target="_blank" rel="noreferrer"><img src={Linkedin} className="icon" alt="ico"/></a>
        </div>
        
    )
}
export default Footer
