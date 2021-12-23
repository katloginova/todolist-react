import React from "react";
import { FaPhone } from "react-icons/fa";
import './style.css';

function IconPhone ( { size } ) {
    return (
        <div className="icon-phone" >
            <FaPhone
                className="fa-phone"
                size={ size }
            />
        </div>
    );
}

export default IconPhone;