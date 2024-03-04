import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

/**
 * Header component displaying the application logo and title.
 * Utilizes React Router's Link for navigation to the home page.
 */
export function Header() {
    return (
        <nav className="flex-between w-full pb-4 pt-3">
            <Link to="/" className="flex gap-2 flex-center">
                <img
                    src={logo}
                    alt="logo"
                    width={35}
                    height={35}
                    className="object-contain"
                />
                <p className="logo_text">LineUp</p>
            </Link>
        </nav>
    );
}

export default Header;

