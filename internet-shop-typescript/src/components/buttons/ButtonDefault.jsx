import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function ButtonDefault ( props ) {
    const { title, nameClass } = props;
    return (
        <button className={ `btn ${ nameClass }` }>
            { title }
        </button>
    )
}

ButtonDefault.propTypes = {
    title: PropTypes.string,
    nameClass: PropTypes.string,
}

export default ButtonDefault;