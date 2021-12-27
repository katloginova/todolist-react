import React from "react";
import PropTypes from 'prop-types';

function SocialTitle ( { title } ) {
    return (
        <div className="social-title">
            { title }
        </div>
    );
}

SocialTitle.propTypes = {
    title: PropTypes.string,
}

export default SocialTitle;