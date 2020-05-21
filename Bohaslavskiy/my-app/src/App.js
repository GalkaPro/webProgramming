import React from 'react';
import './MyInfo.css';
import './package-lock.json';
import './package.json';



function App() {

    return (
        <div className="MyInfo">
            <header className="MyInfo-header">
                <h1>Bohaslavskiy Ernest</h1>
                <p>Hi! My name is Ernest. I’m 20 years old.</p>
                <p>Я живу в Харькове, сейчас у нас карантин и поэтому мое обучение в ХАИ проходит удаленно. А еще у меня есть несколько хобби</p>
                <ul>
                    <li>Игра на гитаре</li>
                    <li>Программирование</li>
                    <li>Игра в мафию</li>
                </ul>
            </header>
        </div>
    );
}
export default App;