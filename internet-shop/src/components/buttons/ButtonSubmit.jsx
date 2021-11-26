import React from "react";
import constants from "../helpers/constants";
import ButtonDefault from "./ButtonDefault";

function ButtonSubmit () {
    return (
        <ButtonDefault
            nameClass={ constants.buttons.btnSubmit }
            title={ 'submit' }
        />
    )
}

export default ButtonSubmit;