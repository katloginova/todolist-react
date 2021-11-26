import React from "react";
import { FaTruck } from "react-icons/fa";
import constants from "../helpers/constants";

import './style.css';

function IconTruck ( { size } ) {

    return (
        <div className={ constants.icons.classes.iconTruck } >
            <FaTruck
                className={ constants.icons.classes.faTruck }
                size={ size }
            />
        </div>
    );
}

export default IconTruck;