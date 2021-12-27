import React from "react";
import PropTypes from 'prop-types';
import SocialText from "../SocialText";

function InfoItem ( { text } ) {
    return (
        <div className="info-item">
            <SocialText text={ text } />
        </div>
    );
}

InfoItem.propTypes = {
    text: PropTypes.string,
}

export default InfoItem;