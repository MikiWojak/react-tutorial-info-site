import React, { useState } from 'react'

import Main from './components/main/Main'
import Navbar from './components/layout/Navbar'

const App = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <div className="container">
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />

            <Main darkMode={darkMode} />
        </div>
    )
}

export default App
