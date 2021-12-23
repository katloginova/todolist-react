import React from "react";
import { FaTwitter } from "react-icons/fa";
import './style.css';

function IconTwitter ( { size } ) {
    return (
        <div className="icon-twitter" >
            <FaTwitter
                className="fa-twitter"
                size={ size } />
        </div>
    );
}

export default IconTwitter;