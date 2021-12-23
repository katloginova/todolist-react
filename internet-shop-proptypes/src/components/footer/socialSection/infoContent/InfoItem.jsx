import React from "react";
import SocialText from "../SocialText";

function InfoItem ( { text } ) {
    return (
        <div className="info-item">
            <SocialText text={ text } />
        </div>
    );
}

export default InfoItem;