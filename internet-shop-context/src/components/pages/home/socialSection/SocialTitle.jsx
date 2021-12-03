import React from "react";
import constants from "../../../helpers/constants";

function SocialTitle ( { title } ) {
    return (
        <div className={ constants.homePage.socialTitle }>
            { title }
        </div>
    );
}

export default SocialTitle;