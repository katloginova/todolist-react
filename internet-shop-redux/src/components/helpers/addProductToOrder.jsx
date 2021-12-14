function addProductToOrder ( id, list ) {
    if ( !isProduct( id, list ) ) {
        const newOrderedProduct = createOrderedProduct( id );
        list.push( newOrderedProduct );
    } else {
        list = changeCountUnits( id, list );
    }

    return list;
}

function isProduct ( id, list ) {
    return list.some( ( item ) => +item.id === +id );
}

function createOrderedProduct ( id ) {
    return {
        id: id,
        countUnits: 1
    }
}

function changeCountUnits ( id, list ) {
    return list.map( ( item ) =>
        ( +item.id !== +id ) ?
            item : {
                ...item,
                countUnits: item.countUnits + 1
            }
    )
}

export default addProductToOrder;