import React from "react";
import PropTypes from 'prop-types';
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

LinkIconDefault.propTypes = {
    iconElem: PropTypes.elementType,
    text: PropTypes.string,
}

export default LinkIconDefault;