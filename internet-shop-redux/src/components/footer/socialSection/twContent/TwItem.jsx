import React from "react";
import constants from "../../../helpers/constants";
import SocialText from "../SocialText";
import IconTwitter from "../../../icons/IconTwitter";

function TwItem({text}){
    return (
        <div className={constants.footer.twitterItem}>
            <IconTwitter size={25} />
            <SocialText text={text} />
        </div>
    );
}

export default TwItem;