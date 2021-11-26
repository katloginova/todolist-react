import React from "react";
import constants from "../../helpers/constants";

function HomeHeader () {

    return (
        <div className={ constants.homePage.classes.homeHead }>
            <div className={ constants.homePage.classes.homeHeadTitle }>
                <p className={ constants.homePage.classes.titleCategory }>ALUMINUM CLUB</p>
                <p className={ constants.homePage.classes.titleFirm }>Experience Ray-Ban</p>
            </div>

        </div>
    );
}

export default HomeHeader;