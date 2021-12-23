import React from "react";

function BasketImg ( props ) {
    const { title, image } = props;

    return (
        <div className="basket__img">
            <div className="img-title">
                { title }
            </div>
            <img src={ image } alt={ title } />
        </div>
    );
}

export default BasketImg;