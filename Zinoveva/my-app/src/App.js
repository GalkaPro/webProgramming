import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


function MyInfo() {
  return(
    <div className="MyInfo">
        <header className="MyInfo-header">
          <h1>Зиновьева Виктория</h1>
          <p>Я Зиновьева Виктория Эдуардовна. Мне 20 лет.</p>
          <p>Живу и родилась в городе Харьков. Я учусь в Харьковском аэрокосмическом университете "ХАИ"</p>
          <p>Страны в которых я хочу побывать:</p>
          <ul>
            <li>Италия</li>
            <li>Нидерланды</li>
            <li>Грузия</li>
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
