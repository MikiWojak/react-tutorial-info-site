import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/index.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MainContent from './components/content/MainContent'

const App = () => {
  return (
    <div className="layout">
      <Header />

      <MainContent />

      <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
