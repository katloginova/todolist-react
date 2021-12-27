import React from "react";
import IconGoogle from "../../../icons/IconGoogle";
import IconLinkedin from "../../../icons/IconLinkedin";
import ContactLinksItem from "./ContactLinksItem";
import IconFacebook from "../../../icons/IconFacebook";
import IconRss from "../../../icons/IconRss";

function ContactLinks () {
    const icons = [
        <IconGoogle size={ 20 } />,
        <IconLinkedin size={ 20 } />,
        <IconRss size={ 20 } />,
        <IconFacebook size={ 20 } />,
    ]
    return (
        <div className="contact-links">
            { icons.map( ( icon, index ) =>
                <ContactLinksItem key={ index } icon={ icon } /> ) }
        </div>
    );
}

export default ContactLinks;