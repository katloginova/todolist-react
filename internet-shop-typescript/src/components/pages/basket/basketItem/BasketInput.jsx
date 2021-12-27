import React from "react";
import PropTypes from 'prop-types';
import { Input } from 'antd';

function BasketInput ( props ) {
    const { countUnits, changeInput } = props;

    return (
        <div className="basket__inp">
            <Input
                defaultValue={ countUnits }
                onChange={ changeInput } />
        </div>
    );
}

BasketInput.propTypes = {
    countUnits: PropTypes.number,
    changeInput: PropTypes.func,
}

export default BasketInput;