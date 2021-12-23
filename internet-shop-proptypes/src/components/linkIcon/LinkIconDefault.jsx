import React from "react";
import './style.css';

function LinkIconDefault ( props ) {
    const { iconElem, text } = props;

    return (
        <div className="icon-link">
            { iconElem }
            <div className="icon-text">{ text }</div>
        </div>
    );
}

export default LinkIconDefault;