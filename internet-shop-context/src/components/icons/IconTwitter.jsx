import React from "react";
import constants from "../helpers/constants";
import { FaTwitter } from "react-icons/fa";
import './style.css';

function IconTwitter ( { size } ) {
    return (
        <div className={ constants.icons.iconTwitter} >
            <FaTwitter
                className={ constants.icons.faTwitter }
                size={ size } />
        </div>
    );
}

export default IconTwitter;