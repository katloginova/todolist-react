import React from "react";
import constants from "../../../helpers/constants";
import SocialsItem from "./SocialsItem";

function SocialSection () {
    const socials = [
        { title: 'Facebook', element: <FacebookContent /> },
        { title: 'From twitter', element: <TwitterContent /> },
        { title: 'information', element: <InformationContent /> },
        { title: 'Contact Us', element: <ContuctContent /> },
    ]
    return (
        <div className={ constants.homePage.SocialSection }>
            { socials.map( ( item ) =>
                <SocialsItem
                    title={ item.title }
                    element={ item.element }
                /> ) }
        </div>

    );
}

export default SocialSection;