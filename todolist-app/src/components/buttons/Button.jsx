import React from "react";
import './style.css'

function Button(props) {
  const {title, nameBtn} = props;
  
    return (
        <button className={`btn ${nameBtn}`}>{title}</button>
    );
  }
  
export default Button;