import React from "react";
import PropTypes from 'prop-types';
import { FaPhone } from "react-icons/fa";
import './style.css';

function IconPhone ( { size } ) {
    return (
        <div className="icon-phone" >
            <FaPhone
                className="fa-phone"
                size={ size }
            />
        </div>
    );
}

IconPhone.propTypes = {
    size: PropTypes.number,
}

export default IconPhone;