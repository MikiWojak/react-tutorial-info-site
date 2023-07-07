import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" alt="react-logo" width="40px" />
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
      <small>
        &copy; 2023 MikiWojak development. All rights reserved.
      </small>
    </footer>
  )
}

const MainContent = () => {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Something refreshing</li>
        <li>Hireable skill</li>
        <li>Broad horizons</li>
      </ol>
    </div>
  )
}

const App = () => {
  return (
    <div>
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
