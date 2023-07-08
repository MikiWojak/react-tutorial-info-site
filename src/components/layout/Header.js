import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" alt="react-logo" className="nav-logo" />

                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
