import React from "react";
import NavigateLink from "./NavigateLink";

function Navigate () {
    const navLinks = [
        { path: '/', title: 'Home' },
        { path: '/products', title: 'Catalog' },
        { path: '/basket', title: [ 1, 2 ] },
    ]

    return (
        <nav className="nav-menu">
            { navLinks?.map( ( link, index ) =>
                <NavigateLink
                    key={ index }
                    nameClass="nav-menu__item"
                    path={ link.path }
                    title={ link.title }
                /> )
            }
        </nav>
    );
}

export default Navigate;