import React from "react";
import './style.css'

function Button(props) {
  const {title, handlerClick} = props;
  
    return (
        <button className={'btn'} onClick={handlerClick}>{title}</button>
    );
  }
  
export default Button;