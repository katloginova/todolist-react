import React from "react";
import constants from "../helpers/constants";
import './style.css';

function InputText ( props ) {
  const { valueInput, handlerChangeInput } = props;

  return (
    <input className={ constants.classInputs.input } type="text" value={ valueInput } onChange={ handlerChangeInput } />
  );
}

export default InputText;