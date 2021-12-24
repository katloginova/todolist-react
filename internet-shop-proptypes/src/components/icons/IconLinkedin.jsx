import React from "react";
import PropTypes from 'prop-types';
import { FaLinkedin } from "react-icons/fa";
import './style.css';

function IconLinkedin ( { size } ) {
    return (
        <div className="icon-linkedin" >
            <FaLinkedin
                className="fa-linkedin"
                size={ size } />
        </div>
    );
}

IconLinkedin.propTypes = {
    size: PropTypes.number,
}

export default IconLinkedin;