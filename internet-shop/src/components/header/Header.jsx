import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconBasket from "../icons/IconBasket";
import Logo from "../logo/Logo";

import './style.css';

function Header ( { countProducts } ) {

    return (
        <header className={ 'header' }>
            <Logo />
            <nav className={ 'nav-menu' }>
                <div className={ 'nav-menu__item' }><NavLink to="/">Home</NavLink></div>
                <div className={ 'nav-menu__item' }><NavLink to="/products">Catalog</NavLink></div>
                <div className={ 'nav-menu__item' }><NavLink to="/basket">Basket</NavLink></div>
            </nav>

            <IconBasket size={ 25 } />
            <div className={ 'products-count' }>{ countProducts }</div>
        </header>
    );
}

export default Header;