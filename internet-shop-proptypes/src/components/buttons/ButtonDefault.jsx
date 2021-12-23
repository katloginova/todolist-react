import React from "react";
import './style.css';

function ButtonDefault ( { title, nameClass } ) {
    return (
        <button
            className={ `btn ${ nameClass }` }
        >
            { title }
        </button>
    )
}

export default ButtonDefault;