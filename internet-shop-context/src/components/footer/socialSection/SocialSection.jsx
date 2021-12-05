import React from "react";
import constants from "../../helpers/constants";
import SocialItem from "./SocialItem";
import FbContent from "./fbContent/FbContent";
import TwContent from "./twContent/TwContent";
import InfoContent from "./infoContent/InfoContent";
import ContactContent from "./contactContent/ContactContent";
import './style.css';

function SocialSection () {
    const socials = [
        { title: 'Facebook', element: <FbContent /> },
        { title: 'From twitter', element: <TwContent /> },
        { title: 'information', element: <InfoContent /> },
        { title: 'Contact Us', element: <ContactContent /> },
    ];
    
    return (
        <div className={ constants.footer.socialSection }>
            { socials.map( ( item, index ) =>
                <SocialItem
                    key={index}
                    title={ item.title }
                    element={ item.element }
                /> ) }
        </div>
    );
}

export default SocialSection;