import React from "react";
import FooterCopyRight from "./FooterCopyRight";
import FooterLink from "./FooterLink";

import './style.css';
import SocialSection from "./socialSection/SocialSection";

function Footer () {
    return (
        <footer className="footer">
            <FooterLink />
            <SocialSection />
            <FooterCopyRight />
        </footer>
    );
}

export default Footer;