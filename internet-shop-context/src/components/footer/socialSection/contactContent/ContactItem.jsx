import React from "react";
import constants from "../../../helpers/constants";
import SocialText from "../SocialText";

function InfoItem({text}){
    return (
        <div className={ constants.footer.contactItem }>
            <SocialText text={text} />
        </div>
    );
}

export default InfoItem;