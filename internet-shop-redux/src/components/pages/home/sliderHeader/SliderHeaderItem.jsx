import React from "react";
import constants from "../../../helpers/constants";


function SliderHeaderItem ( { imgSrc, category, firm } ) {

    return (
        <div className={ constants.homePage.homeHeadSlide }>
            <img src={ imgSrc } />
            <div className={ constants.homePage.homeHeadTitle }>
                <p className={ constants.homePage.titleCategory }>{ category }</p>
                <p className={ constants.homePage.titleFirm }>{ firm }</p>
            </div>
        </div>
    );
}

export default SliderHeaderItem;