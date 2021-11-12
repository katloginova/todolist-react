import React from "react";
import Button from "../../buttons/Button";

function TaskList(props) {
    const {nameList} = props;

    return (
        <ul className={`${nameList}__list ${nameList}-list`}>
            <li className={`${nameList}-list__item active`}>
            <Button nameBtn={'btn-delete'} title={'X'}/>
                item 
            
            </li>
            <li className={`${nameList}-list__item`}>item</li>
            <li className={`${nameList}-list__item`}>item</li>


        </ul>
    );
  }

  export default TaskList;