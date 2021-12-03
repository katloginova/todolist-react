import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Context from "../../../../context";
import addProductToOrder from "../../../helpers/addProductToOrder";
import constants from "../../../helpers/constants";
import getCountTotal from "../../../helpers/getCountTotal";
import ImageDefault from "../../../imageDefault/ImageDefault";
import CardDescription from "./CardDescription";
import './style.css';

function CardProduct ( props ) {
    let { setCountProducts, setCountTotal, listOrderedProducts, setListOrderedProducts } = useContext( Context );
    const { id, title, price, image } = props;
    let { pathname } = useLocation();

    function basketClick () {
        listOrderedProducts = addProductToOrder( id, listOrderedProducts );
        const countTotal = getCountTotal( listOrderedProducts );

        setListOrderedProducts( listOrderedProducts );
        setCountProducts( listOrderedProducts.length );
        setCountTotal( countTotal );
    }


    return (
        <div data-id={ id } className={ constants.catalogPage.card } >
            <Link to={ `${ pathname }/${ id }` } className={ constants.catalogPage.cardlink }>
                <ImageDefault
                    nameClass={ constants.catalogPage.cardImg }
                    title={ title }
                    image={ image } />
            </Link>
            <CardDescription
                title={ title }
                price={ price }
                click={ basketClick } />
        </div>
    );
}

export default CardProduct;