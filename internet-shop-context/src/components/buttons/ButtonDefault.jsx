import React from "react";
import constants from "../helpers/constants";
import './style.css';

function ButtonDefault ( { title, nameClass } ) {
    return (
        <button
            className={ `${ constants.buttons.btn } ${ nameClass }` }
        >
            { title }
        </button>
    )
}

export default ButtonDefault;