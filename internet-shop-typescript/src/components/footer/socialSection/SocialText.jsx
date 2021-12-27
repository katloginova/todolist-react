import React from "react";
import PropTypes from 'prop-types';

function SocialText ( { text } ) {
    return (
        <div className="social-text">
            { text }
        </div>
    );
}

SocialText.propTypes = {
    text: PropTypes.string,
}

export default SocialText;