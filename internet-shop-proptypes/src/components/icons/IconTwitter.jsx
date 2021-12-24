import React from "react";
import PropTypes from 'prop-types';
import { FaTwitter } from "react-icons/fa";
import './style.css';

function IconTwitter ( { size } ) {
    return (
        <div className="icon-twitter" >
            <FaTwitter
                className="fa-twitter"
                size={ size } />
        </div>
    );
}

IconTwitter.propTypes = {
    size: PropTypes.number,
}

export default IconTwitter;