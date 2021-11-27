import React from "react";
import constants from "../../helpers/constants";
import NavigateLink from "./NavigateLink";

function Navigate ( ) {
    const navLinks = [
        { path: '/', title: 'Home' },
        { path: '/products', title: 'Catalog' },
        { path: '/basket', title: 'Basket' },
    ]

    return (
        <nav className={ constants.header.navMenu }>
            { navLinks?.map((link) =>
                <NavigateLink
                    nameClass={ constants.header.navMenuItem }
                    path={ link.path }
                    title={ link.title }
                />)
            }
        </nav>
    );
}

export default Navigate;