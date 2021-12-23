import React from "react";
import { FaGoogle } from "react-icons/fa";
import './style.css';

function IconGoogle ( { size } ) {
    return (
        <div className="icon-google" >
            <FaGoogle
                className="fa-google"
                size={ size } />
        </div>
    );
}

export default IconGoogle;