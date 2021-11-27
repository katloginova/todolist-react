import React from "react";
import constants from "../helpers/constants";
import { FaTruck } from "react-icons/fa";
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