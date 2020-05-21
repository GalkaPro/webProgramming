import React, {Component} from "react";

class Input extends Component{
    render() {
        return (
            <div className="Input">
                <input type="text" required placeholder="Обязательное поле"/>
            </div>
        );
    }
}

export default Input;