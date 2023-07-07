import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" alt="react-logo" width="40px" />
        </nav>
      </header>

      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Something refreshing</li>
        <li>Hireable skill</li>
        <li>Broad horizons</li>
      </ol>

      <footer>
        <small>
          &copy; 2023 MikiWojak development. All rights reserved.
        </small>
      </footer>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
