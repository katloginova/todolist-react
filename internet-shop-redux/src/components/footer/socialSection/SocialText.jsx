import React from "react";
import constants from "../../helpers/constants";

function SocialText({text}){
    return (
        <div className={constants.footer.socialText}>
            {text}
        </div>
    );
}

export default SocialText;