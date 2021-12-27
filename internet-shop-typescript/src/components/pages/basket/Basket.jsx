import { useContext } from "react";
import PropTypes from 'prop-types';
import BasketItem from "./basketItem/BasketItem";
import Context from "../../../context";
import './style.css';

function Basket ( props ) {
    const { changeCountInput, deleteItemClick } = props;
    const { listOrderedProducts } = useContext( Context );

    return ( listOrderedProducts.length > 0 ) && (
        <div className="page-basket">
            { listOrderedProducts.map( ( item ) =>
                <BasketItem
                    key={ item.id }
                    product={ item }
                    changeCountInput={ changeCountInput }
                    deleteItemClick={ deleteItemClick }
                />
            ) }
        </div>
    );
}

Basket.propTypes = {
    changeCountInput: PropTypes.func,
    deleteItemClick: PropTypes.func,
}

export default Basket;