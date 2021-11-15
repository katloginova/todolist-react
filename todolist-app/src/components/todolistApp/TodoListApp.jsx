import React, { useState } from "react";
import Header from "./header/Header";
import Login from "./login/Login";
import TodoList from "./todolist/TodoList";

let userName;
let userList = [];

function TodoListApp() {
  const [show, changeShow] = useState(true);
  const [value, setValue] = useState('');
  const [name, setName] = useState();
  const [valueTask, setValueTask] = useState('');



  /** handlers events by autorization*/

  function changeInputLogin(e){
    setValue(e.target.value);
  }

  function changeInputTask(e){
    setValueTask(e.target.value);
  }

  function clickLogin(){

    if(!isEmpty(value)){
      userName = value;

      if(restoreFromStorage(userName)){
        userList = restoreFromStorage(userName);
      } 
      else{
        saveToStorage(userName, userList);
      }
  
      setName(userName);
      changeShow(!show);
    }

  }

  function clickTask(){

    if(!isEmpty(valueTask)){
      const newTask = createTask(valueTask);

      userList.push(newTask);
      saveToStorage(userName, userList);

      setValueTask('');
    }
  }

  function clickDelete(){
    
  }


  function createTask(task){
    return {
      'id': Date.now(),
      'task': task,
      'isDone': false,
    }
  }



  /** check on ValidValue */

  function isEmpty(str) {
    return str.trim() === '';
  }



  /** Get and set data to 'localStorage' */

  function saveToStorage(name, dataTasks){
    localStorage.setItem(name, JSON.stringify(dataTasks));
  }

  function restoreFromStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}



    return (
      <div className="app-wrap">
        <Header name={name}/>

        {show && <Login valueInput={value} handlerChangeInput={changeInputLogin} handlerClick={clickLogin}/>}

        {!show && <TodoList list={userList} valueInput={valueTask} handlerChangeInput={changeInputTask} handlerClick={clickTask} clickDelete={clickDelete}/>}
      </div>
    );
  }
  
export default TodoListApp;