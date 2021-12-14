import React from "react";
import constants from "../helpers/constants";
import {  FaFacebook } from "react-icons/fa";
import './style.css';

function IconFacebook ( { size } ) {
    return (
        <div className={ constants.icons.iconFacebook} >
            <FaFacebook
                className={ constants.icons.faFacebook }
                size={ size } />
        </div>
    );
}

export default IconFacebook;