import React from 'react';
import photo from './photo.png';
import './sidebar.css'
const Sidebar = () =>{

    return(
        <div className="sidebar">
            <img src={photo} alt="me" className="photo"></img>
        </div>
    )
}

export default Sidebar