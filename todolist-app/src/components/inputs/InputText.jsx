import React from "react";
import './style.css';

function InputText(props) {
  const {nameInput, valueInput} = props;
    return (
        <input className={`input ${nameInput}`} type="text" value={valueInput}/>
    );
  }
  
export default InputText;