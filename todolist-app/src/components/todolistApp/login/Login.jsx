import React from "react";
import constants from "../../helpers/constants"
import Button from "../../buttons/Button";
import InputText from "../../inputs/InputText";

import './style.css';

function Login ( props ) {
  const { valueInput, loginChangeInput, loginClick } = props;

  return (
    <div className={ constants.classNames.login }>
      <h2 className={ constants.classNames.loginTitle }>Autorization</h2>

      <InputText valueInput={ valueInput } handlerChangeInput={ loginChangeInput } />
      <Button title={ constants.buttons.login } handlerClick={ loginClick } />
    </div>
  );
}

export default Login;