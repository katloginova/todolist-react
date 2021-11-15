import React from "react";
import Task from "./Task";

function TaskList(props) {
    const {list, clickDelete} = props;

    return (
        <ul className={'todolist-list'}>
            {list?.map((item) => <Task task={item} clickDelete={clickDelete}/>)}
        </ul>
    );
  }

  export default TaskList;