import React from 'react';
import logo from './logo.svg';
import './MyInfo.css';
import ReactDOM from 'react-dom';
import './package-lock.json';
import './package.json';

class Info extends React.Component {

    constructor() {
        super();
        this.state = {name: 'Тейлор Свифт'};
        this.names = ['Кайли Дженнер', 'Чарльз Дарвин', 'Лионель Месси', 'Дуэйн Джонсон', 'Элтон Джон', 'Бейонсе', 'Ким Кардашьян-Уэст', 'Джеки Чан', 'Дженнифер Лопез', 'Джастин Бибер', 'Рианна'];
    }


    changeName() {
        this.setState({name: this.names[Math.floor(Math.random() * this.names.length)]});
    }


    render() {
        //Выводим имя и кнопку для изменения:
        return <div className="name" >
            <h1> {this.state.name}</h1>
            <p>Когда человек сознательно или интуитивно выбирает себе в жизни какую-то цель, жизненную задачу, он невольно дает себе оценку. По тому, ради чего человек живет, можно судить и о его самооценке - низкой или высокой.</p>
            <button className="knopka" onClick={this.changeName.bind(this)}>Click me!</button>
        </div>;
    }
}

function App() {
  ReactDOM.render(
  <Info/>,
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

