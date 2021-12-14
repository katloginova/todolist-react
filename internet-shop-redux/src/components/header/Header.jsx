import { useSelector } from "react-redux";
import constants from "../helpers/constants";
import IconBasket from "../icons/IconBasket";
import InputSearch from "../inputs/InputSearch.jsx";
import Logo from "../logo/Logo";
import Navigate from "./navigate/Navigate";
import './style.css';

function Header () {
    const { countProducts, countTotal } = useSelector( ( state ) => state );

    return (
        <header className={ constants.header.header }>
            <Logo />
            <Navigate />
            <InputSearch nameClass={ constants.header.headerSearch } />
            <div className={ constants.header.productsCount }>
                { `${ countProducts } (${ countTotal })` }
            </div>
            <IconBasket size={ 25 } />
        </header>
    );
}

export default Header;