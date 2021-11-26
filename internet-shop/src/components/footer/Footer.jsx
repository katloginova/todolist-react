import React from "react";
import constants from "../helpers/constants";
import FooterCopyRight from "./FooterCopyRight";
import FooterLink from "./FooterLink";

import './style.css';

function Footer () {

    return (
        <footer className={ constants.footer.classes.footer }>
            <FooterLink />
            <FooterCopyRight />
        </footer>
    );
}

export default Footer;