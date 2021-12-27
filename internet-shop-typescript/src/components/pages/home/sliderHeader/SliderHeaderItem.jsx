import React from "react";
import PropTypes from 'prop-types';

function SliderHeaderItem ( props ) {
    const { imgSrc, category, firm } = props;

    return (
        <div className="home-head__slide">
            <img src={ imgSrc } />
            <div className="home-head__title">
                <p className="title-category">{ category }</p>
                <p className="title-firm">{ firm }</p>
            </div>
        </div>
    );
}

SliderHeaderItem.propTypes = {
    imgSrc: PropTypes.string,
    category: PropTypes.string,
    firm: PropTypes.string,
}

export default SliderHeaderItem;