import constants from "./constants";

function getData ( id: number, setData: Function ) {
    return fetch( `${ constants.urlProducts }${ id }` )
        .then( res => res.json() )
        .then( ( data ) => setData( data ) )
}

export default getData;