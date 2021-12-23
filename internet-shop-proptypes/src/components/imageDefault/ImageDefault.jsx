import React from "react";

function ImageDefault ( { nameClass, title, image } ) {
    return (
        <div className={ nameClass }>
            <img alt={ title } src={ image } />
        </div>
    );
}

export default ImageDefault;