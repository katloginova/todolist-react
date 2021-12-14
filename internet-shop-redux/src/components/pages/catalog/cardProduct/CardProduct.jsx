import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addProduct, setCountProducts, setCountTotal } from "../../../../modules/listOrderedProducts/reducer";
import constants from "../../../helpers/constants";
import ImageDefault from "../../../imageDefault/ImageDefault";
import CardDescription from "./CardDescription";
import './style.css';

function CardProduct ( props ) {
    const { id, title, price, image } = props;
    let { pathname } = useLocation();
    const dispatch = useDispatch();

    function basketClick () {
        dispatch( addProduct( id ) );
        dispatch( setCountProducts() );
        dispatch( setCountTotal() );
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