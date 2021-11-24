import React from "react";

import IconTruck from "../icons/IconTruck";
import LinkIconDefault from "./LinkIconDefault";


function LinkIconTruck (  ) {

    return (
        <>
            <LinkIconDefault
                iconElem={ <IconTruck size={ 35 }/> }
                text={'Free shipping on orders over $100'}
            />
        </>
    );
}

export default LinkIconTruck;