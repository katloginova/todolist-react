import './style.css';
import BasketItem from "./basketItem/BasketItem";
import constants from "../../helpers/constants";
import { useSelector } from "react-redux";


function Basket ( props ) {
    const { changeCountInput, deleteItemClick } = props;
    const listProducts = useSelector( ( state ) => state.orderedProducts.listProducts )

    return ( listProducts.length > 0 ) && (
        <div className={ constants.basketPage.pageBasket }>
            { listProducts.map( ( item ) =>
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