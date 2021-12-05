import React from "react";
import constants from "../../helpers/constants";
import SocialTitle from "./SocialTitle";

function SocialItem ( { title, element } ) {
    return (
        <div className={ constants.footer.socialItem }>
            <SocialTitle title={ title } />
            { element }
        </div>
    );
}

export default SocialItem;