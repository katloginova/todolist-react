import React from "react";
import Slider from "react-slick";
import ButtonCheckout from "../../../buttons/ButtonCheckout";
import constants from "../../../helpers/constants";
import constantsData from "./constantsData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

function SliderAdvice () {
    const { imagesSlider, settings } = constantsData;

    return (
        <div className={ constants.sliderAdvice.slickAdvice }>
            <Slider { ...settings }>
                { imagesSlider?.map( ( item, index ) => <div key={ index }> <img src={ item.image } /> </div> ) }
            </Slider>

            <ButtonCheckout />
        </div>
    );
}

export default SliderAdvice;