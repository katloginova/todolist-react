import React from "react";
import constants from "../../../helpers/constants";
import SocialTitle from "./SocialTitle";

function SocialsItem ( { title, element } ) {
    return (
        <div className={ constants.homePage.SocialsItem }>
            <SocialTitle title={ title } />
            { element }
        </div>
    );
}

export default SocialsItem;