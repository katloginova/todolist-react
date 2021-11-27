import React from "react";
import constants from "../../helpers/constants";

function HomeHeader () {

    return (
        <div className={ constants.homePage.homeHead }>
            <div className={ constants.homePage.homeHeadTitle }>
                <p className={ constants.homePage.titleCategory }>ALUMINUM CLUB</p>
                <p className={ constants.homePage.titleFirm }>Experience Ray-Ban</p>
            </div>

        </div>
    );
}

export default HomeHeader;