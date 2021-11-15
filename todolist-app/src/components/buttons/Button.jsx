import React from "react";
import constants from "../helpers/constants";
import './style.css'

function Button ( props ) {
  const { title, handlerClick } = props;

  return (
    <button className={ constants.classNames.btn } onClick={ handlerClick }>{ title }</button>
  );
}

export default Button;