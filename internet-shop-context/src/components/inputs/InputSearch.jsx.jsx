import React from "react";
import { Input, Space } from 'antd';
import './style.css';

function InputSearch ( { nameClass } ) {
    const { Search } = Input;

    const onSearch = value => console.log( value );

    return (
        <div className={ nameClass }>
            <Space direction="vertical" >
                <Search placeholder="Search.." onSearch={ onSearch } />
            </Space>
        </div>

    );
}

export default InputSearch;