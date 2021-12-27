import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function NavigateLink ( props ) {
    let { nameClass, path, title } = props;

    return (
        <div className={ nameClass }>
            <NavLink to={ path }>{ title }</NavLink>
        </div>
    );
}

NavigateLink.propTypes = {
    nameClass: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
}

export default NavigateLink;