import React from "react";
import ReactDOM from "react-dom";
import "./CelebrityInfo.css";

class CelebrityInfo extends React.Component {

    constructor() {
        super();
        // Задаём базовые значения
        this.state = { name: 'Стив Джобс' };
        this.names = ['Стив Джобс 1', 'Стив Джобс 2', 'Стив Джобс 3', 'Стив Джобс 4', 'Стив Джобс 5'];
    }

    // Функция для обработки нажатия на кнопку
    switchH1() {
        // Выбор рандомного элемента из массива
        this.setState({ name: this.names[Math.floor(Math.random() * this.names.length)] });
    }

    render() {
        return <div className="name" >
            <h1> {this.state.name}</h1>
            <p>Американский предприниматель, изобретатель и промышленный дизайнер, получивший широкое признание в качестве пионера эры информационных технологий. Один из основателей, председатель совета директоров и CEO корпорации Apple. Один из основателей и CEO киностудии Pixar.</p>
            <button className="switch-h1-button" onClick={this.switchH1.bind(this)}>Сменить заголовок</button>
        </div>;
    }
}



function App() {
    ReactDOM.render(<CelebrityInfo />, document.getElementById("root"));
    return null;
}

export default App;
