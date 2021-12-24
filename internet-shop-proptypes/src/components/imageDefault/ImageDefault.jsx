import React from "react";
import PropTypes from 'prop-types';

function ImageDefault ( props ) {
    const { nameClass, title, image } = props;

    return (
        <div className={ nameClass }>
            <img alt={ title } src={ image } />
        </div>
    );
}

ImageDefault.propTypes = {
    nameClass: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
}

export default ImageDefault;