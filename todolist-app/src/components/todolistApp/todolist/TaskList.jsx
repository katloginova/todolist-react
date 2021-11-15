import React from "react";
import constants from "../../helpers/constants";
import Task from "./Task";

function TaskList ( props ) {
    const { list, changeStateClick, deleteTaskClick } = props;

    return (
        <ul className={ constants.classNames.todolistList }>
            { list?.map( ( item ) =>
                <Task
                    task={ item }
                    deleteTaskClick={ deleteTaskClick }
                    changeStateClick={ changeStateClick }
                /> ) }
        </ul>
    );
}

export default TaskList;