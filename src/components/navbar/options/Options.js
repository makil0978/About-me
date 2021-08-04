
import React from 'react';
import './option.css'
const Option = (props)=>{

    return(
        <div className="option">
            {props.value}
        </div>
    )
}
export default Option;