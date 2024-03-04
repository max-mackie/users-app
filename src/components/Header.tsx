import React from 'react';
import { Link } from 'react-router-dom'; // Import from react-router-dom for routing
import logo from '../logo.png'; // Adjust the path as needed

export function Header() {
    return (
        <nav className="flex-between w-full pb-4 pt-3">
            <Link to="/" className="flex gap-2 flex-center"> 
                <img
                    src={logo}// Use imported logo variable
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
