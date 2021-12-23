import React from "react";

function SliderHeaderItem ( { imgSrc, category, firm } ) {

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

export default SliderHeaderItem;