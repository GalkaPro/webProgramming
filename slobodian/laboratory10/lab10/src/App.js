import React from 'react';
import './MyInfo.css';

function MyInfo() {
  return (
    <div className="MyInfo">
      <header className="MyInfo-header">
        <h1>Артём Слободян</h1>
        <p>Работаю Software Engineer в EPAM, в свободное время разрабатываю игры под Unity.</p>
        <p>Люблю путешествовать и читать.</p>
        <ul>
          <li>Новая Зеландия</li>
          <li>Норвегия</li>
          <li>Исландия</li>
        </ul>
      </header>
    </div>
  );
}


export default MyInfo;
