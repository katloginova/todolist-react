function deleteItem ( id, list ) {
    return list.filter( ( item ) => +item.id !== +id );
}

export default deleteItem;