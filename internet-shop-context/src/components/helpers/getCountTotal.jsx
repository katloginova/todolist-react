function getCountTotal ( list ) {
    return +list.reduce( ( acc, item ) => {
        return acc + item.countUnits;
    }, 0 );
}

export default getCountTotal;