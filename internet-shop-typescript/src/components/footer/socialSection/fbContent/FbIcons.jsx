import React from "react";
import user1 from "../../../../images/fbIcons/user1.jpg";
import user2 from "../../../../images/fbIcons/user2.jpg";
import user3 from "../../../../images/fbIcons/user3.jpg";
import user4 from "../../../../images/fbIcons/user4.jpg";
import ImageDefault from "../../../imageDefault/ImageDefault";

function FbIcons () {
    const images = [ user1, user2, user3, user4, user1, user2, user3, user4 ]

    return (
        <div className="facebook">
            { images?.map( ( img, index ) =>
                <ImageDefault
                    key={ index }
                    nameClass="facebook-icon"
                    title={ 'user' }
                    image={ img } /> ) }
        </div>
    );
}

export default FbIcons;