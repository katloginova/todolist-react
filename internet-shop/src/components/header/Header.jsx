import React from "react";
import { NavLink } from "react-router-dom";
import constants from "../helpers/constants";
import IconBasket from "../icons/IconBasket";
import Logo from "../logo/Logo";
import './style.css';

function Header ( { countProducts } ) {

    return (
        <header className={ constants.header.classes.header }>
            <Logo />
            <nav className={ constants.header.classes.navMenu }>
                <div className={ constants.header.classes.navMenuItem }>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className={ constants.header.classes.navMenuItem }>
                    <NavLink to="/products">Catalog</NavLink>
                </div>
                <div className={ constants.header.classes.navMenuItem }>
                    <NavLink to="/basket">Basket</NavLink>
                </div>
            </nav>

            <IconBasket size={ 25 } />
            <div className={ constants.header.classes.productsCount }>{ countProducts }</div>
        </header>
    );
}

export default Header;