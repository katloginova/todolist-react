import React from "react";
import { FaLinkedin } from "react-icons/fa";
import './style.css';

function IconLinkedin ( { size } ) {
    return (
        <div className="icon-linkedin" >
            <FaLinkedin
                className="fa-linkedin"
                size={ size } />
        </div>
    );
}

export default IconLinkedin;