import React from "react";
import constants from "../helpers/constants";
import { FaLinkedin } from "react-icons/fa";
import './style.css';

function IconLinkedin ( { size } ) {
    return (
        <div className={ constants.icons.iconLinkedin} >
            <FaLinkedin
                className={ constants.icons.faLinkedin }
                size={ size } />
        </div>
    );
}

export default IconLinkedin;