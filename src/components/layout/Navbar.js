import React from 'react'

import reactLogo from '../../assets/images/react-icon-small.png'

const Navbar = ({ darkMode, toggleDarkMode}) => {
    return (
        <nav
            className={darkMode ? "dark": ""}
        >
            <img 
                src={reactLogo}
                alt="react-logo"
                className="nav--logo_icon"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar
