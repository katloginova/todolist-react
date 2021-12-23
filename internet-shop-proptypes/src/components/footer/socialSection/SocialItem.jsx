import React from "react";
import SocialTitle from "./SocialTitle";

function SocialItem ( { title, element } ) {
    return (
        <div className="social-item">
            <SocialTitle title={ title } />
            { element }
        </div>
    );
}

export default SocialItem;