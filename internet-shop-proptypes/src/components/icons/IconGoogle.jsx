import React from "react";
import PropTypes from 'prop-types';
import { FaGoogle } from "react-icons/fa";
import './style.css';

function IconGoogle ( { size } ) {
    return (
        <div className="icon-google" >
            <FaGoogle
                className="fa-google"
                size={ size } />
        </div>
    );
}

IconGoogle.propTypes = {
    size: PropTypes.number,
}

export default IconGoogle;