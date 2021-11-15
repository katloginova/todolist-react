import React from "react";
import constants from "../helpers/constants";
import './style.css'

function ButtonDelete(props) {
  const {title, handlerClick} = props;
  
    return (
        <button className={`${constants.classNames.btn} ${constants.classNames.btnDelete}`} onClick={handlerClick}>{title}</button>
    );
  }
  
export default ButtonDelete;