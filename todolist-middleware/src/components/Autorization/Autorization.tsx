import React, { FC } from 'react';
import { Input, Button } from 'antd';
import './style.css';

const Autorization: FC = () => {
  return (
      <div className="autorization">
          <div className='autorization-title'>Авторизация</div>
          <Input.Group className='autorization-form' compact>
              <Input className='autorization-input' placeholder="Name" />
              <div className='autorization-btns'>
              <Button className='autorization-btn' type="primary">войти</Button>
              <Button className='autorization-btn' type="primary">зарегистрироваться</Button>
              <Button className='autorization-btn' type="primary">admin</Button>
              <Button className='autorization-btn' type="primary">гость</Button>
              </div>
          </Input.Group>
      </div>
  );
}

export default Autorization;