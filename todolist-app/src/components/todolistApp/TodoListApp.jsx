import React, { useState } from "react";
import constants from "../helpers/constants";
import Header from "./header/Header";
import Login from "./login/Login";
import TodoList from "./todolist/TodoList";

let userName;
let userList = [];

function TodoListApp () {
  const [ show, changeShow ] = useState( true );
  const [ valueName, setValueName ] = useState( '' );
  const [ name, setName ] = useState();
  const [ valueTask, setValueTask ] = useState( '' );
  const [ list, setList ] = useState();



  /** handlers events for 'login'*/

  function loginChangeInput ( e ) {
    setValueName( e.target.value );
  }

  function loginClick () {

    if ( !isEmpty( valueName ) ) {
      userName = valueName;

      if ( restoreFromStorage( userName ) ) {
        userList = restoreFromStorage( userName );
      }
      else {
        saveToStorage( userName, userList );
      }

      setName( userName );
      changeShow( !show );
    }
  }



  /** handlers events for 'todoList'*/

  function taskChangeInput ( e ) {
    setValueTask( e.target.value );
  }

  function taskClick () {

    if ( !isEmpty( valueTask ) ) {
      const newTask = createTask( valueTask );

      userList.push( newTask );
      saveToStorage( userName, userList );
      setValueTask( '' );
    }
  }

  function changeStateClick ( e ) {
    const idTask = getIdOfElem( e.target );

    userList = changeStateItem( userList, idTask );
    setList( userList );
    saveToStorage( userName, userList );
  }

  function deleteTaskClick ( e ) {
    const idTask = getIdOfElem( e.target );

    userList = deleteItem( userList, idTask );
    setList( userList );
    saveToStorage( userName, userList );
  }


  /** functions for working with task */

  function createTask ( task ) {
    return {
      'id': Date.now(),
      'task': task,
      'isDone': false,
    }
  }

  function getIdOfElem ( el ) {
    return el.closest( `.${constants.classNames.todolistItem}` ).dataset.id;
  }

  function changeStateItem ( list, id ) {
    return list.map( ( item ) => ( item.id !== +id ) ? item : { ...item, isDone: !item.isDone } );
  }

  function deleteItem ( list, id ) {
    return list.filter( ( item ) => item.id !== +id );
  }



  /** check on ValidValue */

  function isEmpty ( str ) {
    return str.trim() === '';
  }



  /** Get and set data to 'localStorage' */

  function saveToStorage ( name, dataTasks ) {
    localStorage.setItem( name, JSON.stringify( dataTasks ) );
  }

  function restoreFromStorage ( name ) {
    return JSON.parse( localStorage.getItem( name ) );
  }



  return (
    <div className="app-wrap">
      <Header name={ name } />

      
      {/* LOGIN USER */ }
      
      { show && <Login
        valueInput={ valueName }
        loginChangeInput={ loginChangeInput }
        loginClick={ loginClick }
      /> }

      
      {/* TODOLIST OF USER  */}
      
      { !show && <TodoList
        list={ userList }
        changeStateClick={ changeStateClick }
        deleteTaskClick={ deleteTaskClick }
        valueInput={ valueTask }
        taskChangeInput={ taskChangeInput }
        taskClick={ taskClick }
      /> }

    </div>
  );
}

export default TodoListApp;