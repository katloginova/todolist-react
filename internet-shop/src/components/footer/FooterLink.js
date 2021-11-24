import React from "react";
import LinkIconPhone from "../linkIcon/LinkIconPhone";
import LinkIconTruck from "../linkIcon/LinkIconTruck";

function FooterLink () {

    return (
            <div className={'footer-link'}>
                <LinkIconTruck />
                <LinkIconPhone />
            </div>
    );
}

export default FooterLink;