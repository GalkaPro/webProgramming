import React from 'react';
import logo from './logo.svg';
import './App.css';
import './MyInfo.css';
import ReactDOM from 'react-dom';
import './package-lock.json';
import './package.json';

function MyInfo() {
  return(
    <div className="MyInfo">
        <header className="MyInfo-header">
          <h1>Yanina Shokun</h1>
          <p>My name is Yanina. My surname is Shokun. I’m 19 years old.</p>
          <p>I was born in Sumy region and I live in Kharkov. I am currently studying at the Kharkov Aviation University "KhAI".</p>
          <ul>
            <li>France</li>
            <li>USA</li>
            <li>Dubai</li>
          </ul>
        </header>
      </div>
  );
}

  

function App() {
  ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

