import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import Slider from "react-slick";
import photo from '../../../../images/checkout.jpg';
import ButtonCheckout from "../../../buttons/ButtonCheckout";


function SliderAdvice () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={ 'slick-advice' }>
            <Slider { ...settings }>
                <div >
                    <img src={ photo } />
                </div>

                <div>
                    <img src={ photo } />
                </div>

                <div>
                    <img src={ photo } />
                </div>

            </Slider>

            <ButtonCheckout />
        </div>
    );
}

export default SliderAdvice;