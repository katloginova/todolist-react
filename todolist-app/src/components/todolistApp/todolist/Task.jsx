import React from "react";
import ButtonDelete from "../../buttons/ButtonDelete";
import constants from "../../helpers/constants";

function Task(props) {
    const {task, clickDelete} = props;


    return (
        <li className={'todolist-item '} data-id={task.id}>
            <span className={'item-checked'}></span>
            {task.task}
            <ButtonDelete title={constants.buttons.delete} handlerClick={clickDelete}/>
        </li>
    );
  }

  export default Task;