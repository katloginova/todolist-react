import React from "react";
import Button from "../../buttons/Button";
import InputText from "../../inputs/InputText";
import TaskList from "./TaskList";

function TodoListContent() {
    return (
      <div className="todolist">
          <TaskList nameList={'todolist__list'}/>
          <InputText />
          <Button nameBtn={'btn btn-add'} title={'add task'}/>
      </div>
    );
  }
  
export default TodoListContent;