import React, {Component} from 'react':
import './App.css';
import People from"./components/People/People";
import Radium from 'radium'

class App extends Component {

 <h2>Famous people</h2>
   
state={
people:[
    <Name={<h1>'Зигмунд Фрейд'</h1>} year born={'1856'} specialization={'психоаналитик, психиатр и невролог'}/>
<a href="https://ru.wikipedia.org/wiki/Фрейд,_Зигмунд" class="title-lecture" style="text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/375px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg" alt="Foto"></a>
    <Name={<h1>'Карл Геeнрих Маркс'</h1>} year born={'1818'} specialization={'философ'} />
<a href="https://ru.wikipedia.org/wiki/Маркс,_Карл" class="title-lecture" style="text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karl_Marx.png/413px-Karl_Marx.png" alt="Foto"></a>  
    <Name={<h1>'Альберт Ейнштейн'</h1>} year born={'1879'} specialization={'физик'} />
<a href="https://uk.wikipedia.org/wiki/Альберт_Ейнштейн" class="title-lecture" style="text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Einstein1921_by_F_Schmutzer_2.jpg/375px-Einstein1921_by_F_Schmutzer_2.jpg" alt="Foto"></a>
],
pageTitle :'React components'
}
changeTitleHandler = (newTitle) =>{
this.setState({
pageTitle: newTitle
})
}
onChangeName (name, index){
const people = this.state.people[index]
people.name = name
const people = [...this.state.people]
people[index] = people
this.setState({people})
}
render() {
let people = null

 people = this.state.people.map(( people, index) =>{
return(
<People 
key={index}
name={people.name}
year={people.year}
specialization={people.specialization}
onChangeTitle={this.changeTitleHandler.bind(this, people.name)}
onChangeName={event => this.onChangeName(event.target.value,
index)}
/>
)
})
return (
<div className="App">
<h2>{this.state.pageTitle}</h2>
<div style={{
paddingTOP: '60px'
}}>
{people}
</div>
</div>
);
}
}
export default App;
<input 
type="text"
onChange={props.onChangeName}
value={props.name}
className={inputClasses.join(' ')}
/>
<button onClick={props.onChangeTitle}>Up</button>
</div>
);
}
}
export default App;
  