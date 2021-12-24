import React from "react";
import PropTypes from 'prop-types';

function ContactLinksItem ( { icon } ) {

    return (
        <div className="contact-links__item">
            { icon }
        </div>
    );
}

ContactLinksItem.propTypes = {
    icon: PropTypes.elementType,
}

export default ContactLinksItem;