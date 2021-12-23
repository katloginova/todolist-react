import { useContext } from "react";
import './style.css';
import BasketItem from "./basketItem/BasketItem";
import Context from "../../../context";


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

export default Basket;