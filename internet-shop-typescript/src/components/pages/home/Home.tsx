import React from "react";
import FormHome from "./form/FormHome";
import SliderAdvice from './sliderAdvice/SliderAdvice';
import SliderHeader from "./sliderHeader/SliderHeader";
import './style.css';


function Home (): JSX.Element {
    return (
        <div className="page-home">
            <div className="home-head">
                <SliderHeader />
            </div>

            <div className="home-advice">
                <SliderAdvice />
                <FormHome />
            </div>
        </div>
    );
}

export default Home;