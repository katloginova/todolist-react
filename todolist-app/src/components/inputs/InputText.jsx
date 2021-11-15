import React, { useState } from "react";
import './style.css';

function InputText(props) {
  const {valueInput, handlerChangeInput} = props;

    return (
        <input className={'input'} type="text" value={valueInput} onChange={handlerChangeInput}/>
    );
  }
  
export default InputText;