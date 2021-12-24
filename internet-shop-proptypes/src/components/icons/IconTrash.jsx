import React from "react";
import PropTypes from 'prop-types';
import { FaTrashAlt } from "react-icons/fa";
import './style.css';

function IconTrash ( props ) {
    const { size, click } = props;
    return (
        <div className="icon-trash"
            onClick={ click }
        >
            <FaTrashAlt
                className="fa-trash"
                size={ size }
            />
        </div>
    );
}

IconTrash.propTypes = {
    size: PropTypes.number,
    click: PropTypes.func,
}

export default IconTrash;