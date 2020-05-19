import React from 'react';
import './MyInfo.css';
import './package-lock.json';
import './package.json';
import Names from "./Components/Names/Names";

const style = {
    border: '2px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)'
}
class App extends React.Component {


    constructor() {
        super();
        this.state = {name: 'Тейлор Свифт'};
        this.names = ['Кайли Дженнер', 'Чарльз Дарвин', 'Лионель Месси', 'Дуэйн Джонсон', 'Элтон Джон', 'Бейонсе', 'Ким Кардашьян-Уэст', 'Джеки Чан', 'Дженнифер Лопез', 'Джастин Бибер', 'Рианна'];
    }

    changeName() {
        this.setState({name: this.names[Math.floor(Math.random() * this.names.length)]});
    }

    render() {
        return(
            <div className='Names' style={style}>
                <Names
                    people={this.state.name}
                    changeName={this.changeName.bind(this)}/>
            </div>
        );

    }
}



export default App;

