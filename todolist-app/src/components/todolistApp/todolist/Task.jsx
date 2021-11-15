import React from "react";
import ButtonDelete from "../../buttons/ButtonDelete";
import constants from "../../helpers/constants";

function Task ( props ) {
    const { task, changeStateClick, deleteTaskClick } = props;


    return (
        <li className={ constants.classNames.todolistItem } data-id={ task.id }>
            <span
                className={ `${ constants.classNames.itemChecked } ${ task.isDone ? 'active' : '' }` }
                onClick={ changeStateClick }>
            </span>

            { task.task }

            { !task.isDone && <ButtonDelete
                title={ constants.buttons.delete }
                handlerClick={ deleteTaskClick }
            /> }
        </li>
    );
}

export default Task;