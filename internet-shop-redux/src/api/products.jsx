import API from "../components/helpers/constantsApi";

function fetchProducts () {
    fetch( API.products )
        .then( res => res.json() )
        .then( ( products ) => setListProducts( products ) )
}

export default fetchProducts;