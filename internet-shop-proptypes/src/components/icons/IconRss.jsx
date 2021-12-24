import React from "react";
import PropTypes from 'prop-types';
import { FaRss } from "react-icons/fa";
import './style.css';

function IconRss ( { size } ) {
    return (
        <div className="icon-rss" >
            <FaRss
                className="fa-rss"
                size={ size } />
        </div>
    );
}

IconRss.propTypes = {
    size: PropTypes.number,
}

export default IconRss;