import API from "../components/helpers/constantsApi";
import { getProducts } from "../modules/listFetchedProducts/reducer";

function fetchProducts () {
    return function ( dispatch ) {
        fetch( API.products )
            .then( res => res.json() )
            .then( ( products ) => dispatch( getProducts( products ) ) );
    }

}

export default fetchProducts;