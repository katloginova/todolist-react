import { useContext } from "react";
import Context from "../../context";
import IconBasket from "../icons/IconBasket";
import InputSearch from "../inputs/InputSearch.jsx.jsx";
import Logo from "../logo/Logo";
import Navigate from "./navigate/Navigate";
import './style.css';

interface typesCounts{
    countProducts: number, 
    countTotal: number,
}

function Header (): JSX.Element {
    const { countProducts, countTotal } = useContext<typesCounts>( Context );

    return (
        <header className="header">
            <Logo />
            <Navigate />
            <InputSearch />
            <div className="products-count">
                { `${ countProducts } (${ countTotal })` }
            </div>
            <IconBasket size={ 25 } />
        </header>
    );
}

export default Header;