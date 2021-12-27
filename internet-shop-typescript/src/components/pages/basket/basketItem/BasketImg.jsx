import React from "react";
import PropTypes from 'prop-types';

function BasketImg ( props ) {
    const { title, image } = props;

    return (
        <div className="basket__img">
            <div className="img-title">
                { title }
            </div>
            <img src={ image } alt={ title } />
        </div>
    );
}

BasketImg.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}

export default BasketImg;