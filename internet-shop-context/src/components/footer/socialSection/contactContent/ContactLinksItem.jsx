import React from "react";
import constants from "../../../helpers/constants";

function ContactLinksItem({icon}){

    return (
        <div className={ constants.footer.contactLinksItem }>
            {icon}
        </div>
    );
}

export default ContactLinksItem;