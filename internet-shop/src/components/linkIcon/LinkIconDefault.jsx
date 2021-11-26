import React from "react";
import constants from "../helpers/constants";
import './style.css';

function LinkIconDefault ( props ) {
    const { iconElem, text } = props;

    return (
        <div className={ constants.icons.classes.iconLink }>
            { iconElem }
            <div className={ constants.icons.classes.iconText }>{ text }</div>
        </div>
    );
}

export default LinkIconDefault;