import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

import './style.css';

function Header() {
    return (
        <header className={'header'}>
            <Logo />
            <nav className={ 'nav-menu' }>
                <div className={ 'nav-menu__item' }><NavLink to="/">Home</NavLink></div>
                <div className={'nav-menu__item'}><NavLink to="/catalog">Catalog</NavLink></div>
                <div className={'nav-menu__item'}><NavLink to="/basket">Basket</NavLink></div>
                
                {/* <ul className={'nav-menu'}>
                    <li className={'nav-menu__item'}><NavLink to="/">Home</NavLink></li>
                    <li className={'nav-menu__item'}><NavLink to="/catalog">Catalog</NavLink></li>
                    <li className={'nav-menu__item'}><NavLink to="/basket">Basket</NavLink></li>
                    <li><NavLink to="/users/1/2">error</NavLink></li>
                </ul> */}
            </nav>
        </header>
    );
}

export default Header;