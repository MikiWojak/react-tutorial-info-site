import React from 'react'

import reactLogo from '../../assets/images/react-icon-small.png'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src={reactLogo} alt="react-logo" className="nav-logo-img" />
                <h2 className="nav-logo-text">ReactFacts</h2>
            </div>

            <h3 className="nav-item">React Course - Project 1</h3>
        </nav>
    )
}

export default Navbar
