import React from "react";
import constants from "../helpers/constants";
import LinkIconPhone from "../linkIcon/LinkIconPhone";
import LinkIconTruck from "../linkIcon/LinkIconTruck";

function FooterLink () {

    return (
        <div className={ constants.footer.classes.footerLink }>
            <LinkIconTruck />
            <LinkIconPhone />
        </div>
    );
}

export default FooterLink;