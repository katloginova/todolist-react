import './style.css';

import React from "react";
import FormHome from "./form/FormHome";
import constants from "../../helpers/constants";
import HomeHeader from "./HomeHeader";
import SliderAdvice from './slider/SliderAdvice';


function Home () {

    return (
        <div className={ constants.homePage.classes.pageHome }>
            <HomeHeader />
            <div className={ constants.homePage.classes.homeAdvice }>
                <SliderAdvice />
                <FormHome />
            </div>
        </div>
    );
}

export default Home;