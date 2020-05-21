import React, {Component} from 'react';
import './App.css';
import './components/Car/Car'
import Car from "./components/Car/Car";
import Input from "./components/input/Input"

class App extends Component {
    state = {
        cars: [
            {name: 'Audi', year: 2010, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Ford', year: 2019, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Opel', year: 2014, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ],
        pageTitle: 'React components',
        text: 'It`s description'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }


    render() {

        return (
            <div className="App">
                <h1>{this.state.pageTitle}</h1>
                <p>{this.state.text}</p>
                <Input/>
                { this.state.cars.map((car, index) => {
                    return(
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            description={car.description}
                            onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                        />
                    )
                })}

            </div>
        );
    }
}

export default App;
