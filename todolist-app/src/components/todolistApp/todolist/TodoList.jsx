import React from "react";
import Button from "../../buttons/Button";
import InputText from "../../inputs/InputText";
import TaskList from "./TaskList";
import constants from "../../helpers/constants";

import './style.css';


function TodoList ( props ) {
  const { list, changeStateClick, deleteTaskClick, valueInput, taskChangeInput, taskClick } = props;

  return (
    <div className={ constants.classNames.todolist }>
      <TaskList
        list={ list }
        changeStateClick={ changeStateClick }
        deleteTaskClick={ deleteTaskClick }
      />

      <InputText
        valueInput={ valueInput }
        handlerChangeInput={ taskChangeInput }
      />

      <Button
        title={ constants.buttons.add }
        handlerClick={ taskClick }
      />
    </div>
  );
}

export default TodoList;