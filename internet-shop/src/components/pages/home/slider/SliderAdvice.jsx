import React from "react";
import Slider from "react-slick";
import ButtonCheckout from "../../../buttons/ButtonCheckout";
import SliderItem from "./SliderItem";
import photo from '../../../../images/checkout.jpg';
import constants from "../../../helpers/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

function SliderAdvice () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const sliderItems = [ photo, photo, photo ];

    return (
        <div className={ constants.sliderAdvice.slickAdvice }>
            <Slider { ...settings }>
                { sliderItems?.map((item) => <SliderItem photoSrc={ item }/>) }
            </Slider>

            <ButtonCheckout />
        </div>
    );
}

export default SliderAdvice;