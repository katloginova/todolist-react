import React from "react";
import constants from "../helpers/constants";
import {  FaRss } from "react-icons/fa";
import './style.css';

function IconRss ( { size } ) {
    return (
        <div className={ constants.icons.iconRss} >
            <FaRss
                className={ constants.icons.faRss }
                size={ size } />
        </div>
    );
}

export default IconRss;