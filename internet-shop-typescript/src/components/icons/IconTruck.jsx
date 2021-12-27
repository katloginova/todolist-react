import React from "react";
import PropTypes from 'prop-types';
import { FaTruck } from "react-icons/fa";
import './style.css';

function IconTruck ( { size } ) {
    return (
        <div className="icon-truck" >
            <FaTruck
                className="fa-truck"
                size={ size }
            />
        </div>
    );
}

IconTruck.propTypes = {
    size: PropTypes.number,
}

export default IconTruck;