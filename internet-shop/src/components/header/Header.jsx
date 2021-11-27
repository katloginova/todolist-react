import React from "react";
import constants from "../helpers/constants";
import IconBasket from "../icons/IconBasket";
import Logo from "../logo/Logo";
import Navigate from "./navigate/Navigate";
import './style.css';

function Header ( { countProducts } ) {

    return (
        <header className={ constants.header.header }>
            <Logo />
            <Navigate />
            <IconBasket size={ 25 } nameClass={''} />
            <div className={ constants.header.productsCount }>
                { countProducts }
            </div>
        </header>
    );
}

export default Header;