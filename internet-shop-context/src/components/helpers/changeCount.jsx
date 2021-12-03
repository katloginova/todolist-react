function changeCount ( id, list, value ) {
    return list.map( ( item ) =>
        ( +item.id !== +id ) ?
            item : { ...item, countUnits: +value }
    )
}

export default changeCount;