import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderHeaderItem from "./SliderHeaderItem";
import constantsData from "./constantsData";


function SliderHeader () {
    const { imagesSlider, settings } = constantsData;

    return (
        <Slider { ...settings } className="home-head__slider">
            { imagesSlider?.map( ( item, index ) =>
                <SliderHeaderItem
                    key={ index }
                    imgSrc={ item.image }
                    category={ item.category }
                    firm={ item.firm }
                /> )
            }
        </Slider>
    );
}

export default SliderHeader;