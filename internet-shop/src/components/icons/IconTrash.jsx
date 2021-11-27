import React from "react";
import constants from "../helpers/constants";
import { FaTrashAlt } from "react-icons/fa";
import './style.css';

function IconTrash ( { size, click } ) {
    return (
        <div className={ constants.icons.iconTrash }
            onClick={ click }
        >
            <FaTrashAlt
                className={ constants.icons.faTrash }
                size={ size }
            />
        </div>
    );
}

export default IconTrash;