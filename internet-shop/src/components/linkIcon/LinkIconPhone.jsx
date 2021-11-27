import React from "react";
import IconPhone from "../icons/IconPhone";
import LinkIconDefault from "./LinkIconDefault";

function LinkIconPhone () {
    return (
        <>
            <LinkIconDefault
                iconElem={ <IconPhone size={ 35 } /> }
                text={ 'call us! toLl free- 409-8888-0099' }
            />
        </>
    );
}

export default LinkIconPhone;