import React from "react";
import constants from "../../helpers/constants"
import Button from "../../buttons/Button";
import InputText from "../../inputs/InputText";

import './style.css';

function Login(props) {
  const {valueInput, handlerChangeInput, handlerClick} = props;

    return (
      <div className="login">
        <h2 className={'login-title'}>Autorization</h2>

        <InputText valueInput={valueInput} handlerChangeInput={handlerChangeInput}/>
        <Button title={constants.buttons.login} handlerClick={handlerClick}/>
      </div>
    );
  }
  
export default Login;