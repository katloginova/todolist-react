import React from "react";
import PropTypes from 'prop-types';
import SocialTitle from "./SocialTitle";

function SocialItem ( props ) {
    const { title, element } = props;

    return (
        <div className="social-item">
            <SocialTitle title={ title } />
            { element }
        </div>
    );
}

SocialItem.propTypes = {
    title: PropTypes.string,
    element: PropTypes.elementType,
}

export default SocialItem;