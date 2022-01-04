import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import './style.css';
import DefaultButton from '../DefaultButton/DefaultButton';
import { getUserData, getUserName } from '../../modules/users/reducer';
import { typesState } from '../../helpers/types';
import isEmpty from '../../helpers/isEmpty';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { signinUser } from '../../modules/users/reducer';

const Autorization: FC = () => {
    const dispatch = useDispatch();
    let userName = useSelector((state: typesState) => state.userName);
    const [path, setPath] = useState<string>('');
    // let { pathname } = useLocation();
    console.log(useLocation());

    function enterUser(){
        if(!isEmpty(userName)){
            dispatch(getUserData(userName));
            setPath('/tasks');
            // console.log(pathname)
        }
        else{
            setPath('');
        }
    }

    function changeInput(e: any){
        userName = e.target.value;
        dispatch(getUserName(userName.trim()));
    }

  return (
      <div className="autorization">
          <div className='autorization-title'>Авторизация</div>
          <Input.Group className='autorization-form' compact>
              <Input className='autorization-input' placeholder="Name" onChange={changeInput}/>
              <div className='autorization-btns'>
              {/* <Button className='autorization-btn' type="primary">войти</Button>
              <Button className='autorization-btn' type="primary">зарегистрироваться</Button>
              <Button className='autorization-btn' type="primary">admin</Button>
              <Button className='autorization-btn' type="primary">гость</Button> */}
                  {/* <DefaultButton classBtn='autorization-btn' title='войти' click={enterUser} /> */}
                  <Link to={path}>
                    <DefaultButton classBtn='autorization-btn' title='войти' click={enterUser} />
                  </Link>
              </div>
          </Input.Group>
      </div>
  );
}

export default Autorization;