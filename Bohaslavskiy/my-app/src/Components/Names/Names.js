import React from "react";
import Radium from 'radium';
import './Names.css'

const Car = props => {
    return <div className='car' style={style}>
        <h2>Car name: {props.name}</h2>
        <p>Year: <strong>{props.year}</strong></p>
        <p>Description: {props.description}</p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>;
}

const style = {
    border: '2px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    ':hover': {
        border: '3px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        cursor: 'pointer'
    }
}

export default Radium(Car);