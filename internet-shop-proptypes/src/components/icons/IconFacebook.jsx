import React from "react";
import PropTypes from 'prop-types';
import { FaFacebook } from "react-icons/fa";
import './style.css';

function IconFacebook ( { size } ) {
    return (
        <div className="icon-facebook" >
            <FaFacebook
                className="fa-facebook"
                size={ size } />
        </div>
    );
}

IconFacebook.propTypes = {
    size: PropTypes.number,
}


export default IconFacebook;