import React from "react";
import './Names.css'

const Car = props => {
    return <div className='car'>
        <h2>Car name: {props.name}</h2>
        <p>Year: <strong>{props.year}</strong></p>
        <p>Description: {props.description}</p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>;
}



export default Car;