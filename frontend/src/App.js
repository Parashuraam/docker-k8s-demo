import React from 'react';
import logo from './k8s.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Docker and Node JS Demo Application
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/kurma.parshuram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reach me on  Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
