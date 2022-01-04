import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import DefaultButton from '../DefaultButton/DefaultButton';
import { getUserData, getUserName } from '../../modules/users/reducer';
import { typesState } from '../../helpers/types';
import isEmpty from '../../helpers/isEmpty';
import { Link } from 'react-router-dom';
import './style.css';


const Autorization: FC = () => {
    const dispatch = useDispatch();
    let userName = useSelector((state: typesState) => state.userName);
    const [nameUser, setNameUser] = useState<string>(userName);
    let path = '/user-tasks';

    function enterUser(){
        if(!isEmpty(userName)){
            dispatch(getUserData(userName));
        }
        setNameUser('');
    }

    function changeInput(e: any){
        userName = e.target.value;
        setNameUser(userName);
        dispatch(getUserName(userName.trim()));
    }

  return (
      <div className="autorization">
          <div className='autorization-title'>Авторизация</div>
          <Input.Group className='autorization-form' compact>
              <Input
                  className='autorization-input'
                  placeholder="Name"
                  value={nameUser}
                  onChange={changeInput} />
              <div className='autorization-btns'>
                  <Link to={!isEmpty(userName)? path : ''}>
                      <DefaultButton
                          classBtn='autorization-btn'
                          title='войти'
                          click={enterUser} />
                  </Link>
              </div>
          </Input.Group>
      </div>
  );
}

export default Autorization;