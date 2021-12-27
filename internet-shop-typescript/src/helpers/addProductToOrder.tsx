import { typesOrderedProduct } from "./typesOrderedList";

function addProductToOrder ( id: number, list: typesOrderedProduct[] ) {
    if ( !isProduct( id, list ) ) {
        const newOrderedProduct = createOrderedProduct( id );
        list.push( newOrderedProduct );
    } else {
        list = changeCountUnits( id, list );
    }

    return list;
}

function isProduct ( id: number, list: typesOrderedProduct[]) {
    return list.some( ( item: typesOrderedProduct ) => +item.id === +id );
}

function createOrderedProduct ( id: number ) {
    return {
        id: id,
        countUnits: 1
    }
}

function changeCountUnits ( id: number, list: typesOrderedProduct[] ) {
    return list.map( ( item: typesOrderedProduct ) =>
        ( +item.id !== +id ) ?
            item : {
                ...item,
                countUnits: item.countUnits + 1
            }
    )
}

export default addProductToOrder;