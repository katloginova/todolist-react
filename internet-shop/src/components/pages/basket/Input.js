import React from "react";
// import './style.css';

function Input ( props ) {
  const { valueInput, handlerChangeInput } = props;

  return (
    <input  type="text" value={ valueInput } onChange={ handlerChangeInput } />
  );
}

export default Input;