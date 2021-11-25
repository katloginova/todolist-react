import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import './style.css';

function IconTrash ({size, click} ) {

    return (
        <div className={'icon-trash'} onClick={ click }>
            <FaTrashAlt className={ 'fa-trash' } size={ size }/>
        </div>
  );
}

export default IconTrash;