import React from "react";
import SocialText from "../SocialText";
import FbIcons from "./FbIcons";

function FbContent () {
    return (
        <div className="facebook">
            <SocialText text={ '20000 Members' } />
            <FbIcons />
            <SocialText text={ 'facebook Social plugin' } />
        </div>
    );
}

export default FbContent;