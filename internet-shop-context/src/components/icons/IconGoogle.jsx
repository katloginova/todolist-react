import React from "react";
import constants from "../helpers/constants";
import { FaGoogle } from "react-icons/fa";
import './style.css';

function IconGoogle ( { size } ) {
    return (
        <div className={ constants.icons.iconGoogle} >
            <FaGoogle
                className={ constants.icons.faGoogle }
                size={ size } />
        </div>
    );
}

export default IconGoogle;