import React from "react";
import { FaTruck } from "react-icons/fa";

import './style.css';

function IconTruck ({size} ) {

    return (
        <div className={'icon-truck'} >
            <FaTruck className={'fa-truck'} size={ size } />
        </div>
  );
}

export default IconTruck;