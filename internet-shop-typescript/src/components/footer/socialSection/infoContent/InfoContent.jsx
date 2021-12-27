import React from "react";
import InfoItem from "./InfoItem";

function InfoContent () {
    const infoList = [
        'Sed ultrices purus non.',
        'sodales sodales.',
        'Curabitur pretium dui vitae.',
        'Donec gravida mi in nisl',
        'faucibus leo condimentum.',
        'Donec et lorem suscipit.'
    ];
    return (
        <div className="info">
            { infoList?.map( ( item, index ) => <InfoItem key={ index } text={ item } /> ) }
        </div>
    );
}

export default InfoContent;