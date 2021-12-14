import React from "react";
import constants from "../../../helpers/constants";
import TwItem from "./TwItem";

function TwContent(){
    return (
        <div className={ constants.footer.twitter }>
            <TwItem
                text={ `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the` } />
            <TwItem
                text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the`} />
        </div>
    );
}

export default TwContent;