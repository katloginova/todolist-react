import React from "react";
import { Input } from 'antd';

function BasketInput ( { countUnits, changeInput } ) {
    return (
        <div className="basket__inp">
            <Input
                defaultValue={ countUnits }
                onChange={ changeInput } />
        </div>
    );
}

export default BasketInput;