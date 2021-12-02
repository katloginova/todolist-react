import React from "react";
import FormHome from "./form/FormHome";
import constants from "../../helpers/constants";
import SliderAdvice from './sliderAdvice/SliderAdvice';
import SliderHeader from "./sliderHeader/SliderHeader";
import './style.css';


function Home () {
    return (
        <div className={ constants.homePage.pageHome }>
            <div className={ constants.homePage.homeHead }>
                <SliderHeader />
            </div>

            <div className={ constants.homePage.homeAdvice }>
                <SliderAdvice />
                <FormHome />
            </div>
        </div>
    );
}

export default Home;