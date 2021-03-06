import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Context from "../../../../context";
import addProductToOrder from "../../../../helpers/addProductToOrder";
import getCountTotal from "../../../../helpers/getCountTotal";
import ImageDefault from "../../../imageDefault/ImageDefault";
import CardDescription from "./CardDescription";
import './style.css';


function CardProduct ( props ) {
    const { id, title, price, image } = props;
    let { setCountProducts, setCountTotal, listOrderedProducts, setListOrderedProducts } = useContext( Context );
    let { pathname } = useLocation();

    function basketClick () {
        listOrderedProducts = addProductToOrder( id, listOrderedProducts );
        const countTotal = getCountTotal( listOrderedProducts );

        setListOrderedProducts( listOrderedProducts );
        setCountProducts( listOrderedProducts.length );
        setCountTotal( countTotal );
    }


    return (
        <div data-id={ id } className="card" >
            <Link to={ `${ pathname }/${ id }` } className="card-link">
                <ImageDefault
                    nameClass="card__img"
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

CardProduct.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
}

export default CardProduct;