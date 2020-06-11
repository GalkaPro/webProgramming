import React, {Component} from 'react':
import './App.css';
import People from"./components/People/People";
import Businessman from 'businessman'

class App extends Component {

 <h2>Famous people</h2>
   
state={
people:[
    <Name={<h1>'Никола Те́сла'</h1>} year born={'1856'} specialization={' учёный, инженер, физик, изобретатель в области электротехники и радиотехники сербского происхождения'}/>
<a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0" class="title-lecture" style="text-align: center"> <img src="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Tesla_Sarony.jpg"alt="Foto"></img>> </a>
    <Name={<h1>'Георг Симон Ом'</h1>} year born={'1787'} specialization={' немецкий физик,вывел теоретически и подтвердил на опыте закон, выражающий связь между силой тока в цепи, напряжением и сопротивлением '} />
<a href="https://ru.wikipedia.org/wiki/%D0%9E%D0%BC,_%D0%93%D0%B5%D0%BE%D1%80%D0%B3_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD" class="title-lecture" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/%D0%9E%D0%BC,_%D0%93%D0%B5%D0%BE%D1%80%D0%B3_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Georg_Simon_Ohm3.jpg" alt="Foto"></a>  
    <Name={<h1>'Николай Егорович Жуковский'</h1>} year born={'1921'} specialization={'Русский учёный-механик, основоположник гидро- и аэродинамики.'} />
<a href="https://ru.wikipedia.org/wiki/%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%95%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87#/media/%D0%A4%D0%B0%D0%B9%D0%BB:%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%95%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg" alt="Foto"></a>
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