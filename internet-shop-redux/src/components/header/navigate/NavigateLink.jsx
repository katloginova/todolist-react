import React from "react";
import { NavLink } from "react-router-dom";

function NavigateLink ( { nameClass, path, title } ) {
    return (
        <div className={ nameClass }>
            <NavLink to={ path }>{ title }</NavLink>
        </div>
    );
}

export default NavigateLink;