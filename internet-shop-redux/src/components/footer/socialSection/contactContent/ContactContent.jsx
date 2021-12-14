import React from "react";
import constants from "../../../helpers/constants";
import ContactItem from "./ContactItem";
import ContactLinks from "./ContactLinks";

function ContactContent(){
    const contactList = [
        'Leo Store',
        'Leopards media',
        'KVM Rpad, 4590GH',
        '+1 489-8888-0099',
        'mail@email.com',
    ];
    return (
        <div className={ constants.footer.contact }>
            { contactList?.map((item, index) => <ContactItem key={ index } text={ item } />) }
            <ContactLinks />
        </div>
    );
}

export default ContactContent;