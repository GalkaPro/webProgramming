import React, {Component} from "react";
import './Input.css'

class Input extends Component{
    render() {
        return (
            <div className="Input">
                <input type="text" id='knopka' required/>
            </div>
        );
    }
}

export default Input;