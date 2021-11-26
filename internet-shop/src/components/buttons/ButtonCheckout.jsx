import React from "react";
import constants from "../helpers/constants";
import ButtonDefault from "./ButtonDefault";

function ButtonCheckout () {
    return (
        <ButtonDefault
            nameClass={ constants.buttons.btnCheckout }
            title={ 'check it out' }
        />
    )
}

export default ButtonCheckout;