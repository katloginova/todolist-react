import React from "react";
import constants from "../../../helpers/constants";

function FormTitle () {
    return (
        <div className={ constants.form.classes.formDescription }>
            <h2 className={ constants.form.classes.formTitle }>
                newsletters signup
            </h2>
            <p className={ constants.form.classes.formSubtitle }>
                Lorem ipsum dolor sit amen, dolor imun ra adlip
                ulissys
            </p>
            <div className={ 'divider' }></div>
        </div>
    )
}

export default FormTitle;