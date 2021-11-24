import React from "react";
import FooterCopyRight from "./FooterCopyRight";
import FooterLink from "./FooterLink";

import './style.css';

function Footer () {

    return (
        <footer className={ 'footer' }>
            <FooterLink />
            <FooterCopyRight />
        </footer>
    );
}

export default Footer;