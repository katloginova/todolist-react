import React, { FC } from 'react';
import { Input } from 'antd';
import './style.css';
import DefaultButton from '../DefaultButton/DefaultButton';
import { signinUser } from '../../modules/users/reducer';

const Autorization: FC = () => {
    function signin(e: any) {
        console.log("login")
        signinUser(e.target.value);
    }

  return (
      <div className="autorization">
          <div className='autorization-title'>Авторизация</div>
          <Input.Group className='autorization-form' compact>
              <Input className='autorization-input' placeholder="Name" />
              <div className='autorization-btns'>
              {/* <Button className='autorization-btn' type="primary">войти</Button>
              <Button className='autorization-btn' type="primary">зарегистрироваться</Button>
              <Button className='autorization-btn' type="primary">admin</Button>
              <Button className='autorization-btn' type="primary">гость</Button> */}
                  <DefaultButton classBtn='autorization-btn' title='войти' click={signin} />
                  {/* <DefaultButton title='зарегистрироваться' click={signup}/> */}
              </div>
          </Input.Group>
      </div>
  );
}

export default Autorization;