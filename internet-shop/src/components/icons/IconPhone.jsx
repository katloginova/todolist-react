import React from "react";
import { FaPhone } from "react-icons/fa";
import constants from "../helpers/constants";

import './style.css';

function IconPhone ( { size } ) {

    return (
        <div className={ constants.icons.classes.iconPhone } >
            <FaPhone
                className={ constants.icons.classes.faPhone }
                size={ size }
            />
        </div>
    );
}

export default IconPhone;