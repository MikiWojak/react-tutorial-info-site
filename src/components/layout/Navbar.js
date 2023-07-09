import React from 'react'

import reactLogo from '../../assets/images/react-icon-small.png'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav--logo">
                <img src={reactLogo} alt="react-logo" className="nav--logo_img" />
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>

            <h4 className="nav--item">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar
