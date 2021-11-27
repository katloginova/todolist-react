import React from "react";
import FormHome from "./form/FormHome";
import constants from "../../helpers/constants";
import HomeHeader from "./HomeHeader";
import SliderAdvice from './slider/SliderAdvice';
import './style.css';

function Home () {
    return (
        <div className={ constants.homePage.pageHome }>
            <HomeHeader />
            <div className={ constants.homePage.homeAdvice }>
                <SliderAdvice />
                <FormHome />
            </div>
        </div>
    );
}

export default Home;