import React from "react";
import SocialText from "../SocialText";
import IconTwitter from "../../../icons/IconTwitter";

function TwItem ( { text } ) {
    return (
        <div className="twitter-item">
            <IconTwitter size={ 25 } />
            <SocialText text={ text } />
        </div>
    );
}

export default TwItem;