import React from "react";
import Button from "../../buttons/Button";
import InputText from "../../inputs/InputText";
import Title from "../../titles/Title";

import './style.css';

function Login() {
    return (
      <div className="login">
        <Title nameTitle={'login__title'} title={'Autorization'}/>
        <InputText nameInput={'login__input'} valueInput={'Enter name...'}/>
        <Button nameBtn={'login__btn'} title={'Log in'}/>
      </div>
    );
  }
  
export default Login;