import React from "react";
import constants from "../../../helpers/constants";

function FormTitle () {
    return (
        <div className={ constants.form.formDescription }>
            <h2 className={ constants.form.formTitle }>
                newsletters signup
            </h2>
            <p className={ constants.form.formSubtitle }>
                Lorem ipsum dolor sit amen, dolor imun ra adlip
                ulissys
            </p>
            <div className={ constants.common.divider }></div>
        </div>
    )
}

export default FormTitle;