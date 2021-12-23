import React from "react";
import { FaRss } from "react-icons/fa";
import './style.css';

function IconRss ( { size } ) {
    return (
        <div className="icon-rss" >
            <FaRss
                className="fa-rss"
                size={ size } />
        </div>
    );
}

export default IconRss;