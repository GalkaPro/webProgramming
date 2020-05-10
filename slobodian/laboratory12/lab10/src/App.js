import React from "react";
import "./CelebrityInfo.css";

class CelebrityInfo extends React.Component {

    constructor() {
        super();
        // Задаём базовые значения
        this.state = { 
            name: 'Стив Джобс',
            inputStyle: null
        };
        this.names = ['Стив Джобс 1', 'Стив Джобс 2', 'Стив Джобс 3', 'Стив Джобс 4', 'Стив Джобс 5'];
    }

    // Функция для обработки нажатия на кнопку
    switchH1() {
        // Выбор рандомного элемента из массива
        this.setState({ name: this.names[Math.floor(Math.random() * this.names.length)] });
    }

    // Смена рамки в зависимости от value в input
    onChangeInput(e) {
        if (e.target.value === "")
        {
            // input пустой - снимаем класс со стилем
            this.setState({ inputStyle: null });
        }
        else 
        {
            // input не пустой - добавляем класс со стилем
            this.setState({ inputStyle: 'not-empty-input' });
        }
    }
    render() {
        return <div className="name" >
            <h1> {this.state.name}</h1>
            <p>Американский предприниматель, изобретатель и промышленный дизайнер, получивший широкое признание в качестве пионера эры информационных технологий. Один из основателей, председатель совета директоров и CEO корпорации Apple. Один из основателей и CEO киностудии Pixar.</p>
            <button className="switch-h1-button" onClick={this.switchH1.bind(this)}>Сменить заголовок</button>
            <hr></hr>
            <input type="text" onChange={this.onChangeInput.bind(this)} class={this.state.inputStyle}></input>
        </div>;
    }
}

export default CelebrityInfo;
