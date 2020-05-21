import React, {Component} from 'react';
import './Components/Names/Names'
import Car from "./Components/Names/Names";


class App extends Component {
    state = {
        cars: [
            {name: 'BMW', year: 2015, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Nisssan', year: 2016, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {name: 'Bentley', year: 2017, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ],
        pageTitle: 'Laboratory #12',
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