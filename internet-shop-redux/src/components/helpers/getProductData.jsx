import constants from "./constants";

function getProductData ( id, setData ) {
    return fetch( `${ constants.urlProducts }${ id }` )
        .then( res => res.json() )
        .then( ( data ) => setData( data ) )
}

export default getProductData;