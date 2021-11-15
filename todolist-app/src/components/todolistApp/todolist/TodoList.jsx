import React from "react";
import Button from "../../buttons/Button";
import InputText from "../../inputs/InputText";
import TaskList from "./TaskList";

import './style.css';
import constants from "../../helpers/constants";

function TodoList(props) {
  const {list, clickDelete, valueInput, handlerChangeInput, handlerClick} = props;

    return (
      <div className={'todolist'}>
          <TaskList list={list} clickDelete={clickDelete}/>

          <InputText valueInput={valueInput} handlerChangeInput={handlerChangeInput}/>
          <Button title={constants.buttons.add} handlerClick={handlerClick}/>
      </div>
    );
  }
  
export default TodoList;