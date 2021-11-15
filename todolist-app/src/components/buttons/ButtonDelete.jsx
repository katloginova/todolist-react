import React from "react";
import './style.css'

function ButtonDelete(props) {
  const {title, handlerClick} = props;
  
    return (
        <button className={'btn btn-delete'} onClick={handlerClick}>{title}</button>
    );
  }
  
export default ButtonDelete;