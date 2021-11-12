import React from "react";
import Button from "../../buttons/Button";
import InputText from "../../inputs/InputText";
import TaskList from "./TaskList";

import './style.css';

function TodoListContent(props) {
  const {nameTodo} = props;
    return (
      <div className={nameTodo}>
          <TaskList nameList={nameTodo}/>
          <InputText nameInput={`${nameTodo}__input`} valueInput={'Enter task...'}/>
          <Button nameBtn={`${nameTodo}__btn`} title={'add task'}/>
      </div>
    );
  }
  
export default TodoListContent;