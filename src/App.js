import React, { useState } from 'react'

import Main from './components/main/Main'
import Navbar from './components/layout/Navbar'

const App = () => {
    const [darkMode] = useState(false)

    return (
        <div className="container">
            <Navbar darkMode={darkMode}/>

            <Main darkMode={darkMode}/>
        </div>
    )
}

export default App
