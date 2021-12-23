import React from "react";
import { FaFacebook } from "react-icons/fa";
import './style.css';

function IconFacebook ( { size } ) {
    return (
        <div className="icon-facebook" >
            <FaFacebook
                className="fa-facebook"
                size={ size } />
        </div>
    );
}

export default IconFacebook;