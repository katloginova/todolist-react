import React from "react";
import {useParams} from "react-router-dom";
import { useMemo, useState } from "react";
import constants from "../../helpers/constants";

function ProductDetails (  ) {
    const {productId} = useParams()
    const [data, setData] = useState({})
    useMemo(() => {
        fetch(`${constants.urlProducts}${productId}`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [productId])
    let {title = '', description = ''} = data
    console.log( 'data', data )
    
    return (
        <div className="product-details">
            <h1>product {title}</h1>
            
            <p>{description}</p>
        </div>
  );
}

export default ProductDetails;
