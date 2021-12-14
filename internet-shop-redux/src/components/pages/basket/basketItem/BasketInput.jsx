import React from "react";
import constants from "../../../helpers/constants";
import { Input } from 'antd';

function BasketInput ( { countUnits, changeInput } ) {
    return (
        <div className={ constants.basketPage.basketInp }>
            <Input
                defaultValue={ countUnits }
                onChange={ changeInput } />
        </div>
    );
}

export default BasketInput;