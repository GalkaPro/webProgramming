import React from "react";
import './MyInfo.css'
class App extends Component {

 <h2>Известные люди</h2>
   
state={
people:[
    <Name={<h1>'Джон Фицджеральд «Джек» Ке́ннеди'</h1>} specialization={' известный также как JFK (Джей-Эф-Кей); 29 мая 1917, Бруклайн — 22 ноября 1963, Даллас)[6] — американский политический, государственный и общественный деятель, 35-й президент США (1961—1963). В современном общественном сознании Кеннеди чаще всего связывают с его загадочным убийством, потрясшим весь мир, многочисленные гипотезы разрешения которого выдвигаются по сей день.'}/>
<a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%BD%D0%BD%D0%B5%D0%B4%D0%B8,_%D0%94%D0%B6%D0%BE%D0%BD_%D0%A4%D0%B8%D1%86%D0%B4%D0%B6%D0%B5%D1%80%D0%B0%D0%BB%D0%B4" style="text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/250px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg" alt="Foto"></a>
    <Name={<h1>'Джонсон, Линдон'</h1>}specialization={'36-й Президент США от Демократической партии с 22 ноября 1963 года по 20 января 1969 года.'} />
<a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD%D1%81%D0%BE%D0%BD,_%D0%9B%D0%B8%D0%BD%D0%B4%D0%BE%D0%BD"  class="title-lecture" style="text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/37_Lyndon_Johnson_3x4.jpg/220px-37_Lyndon_Johnson_3x4.jpg" alt="Foto"></a>  
    <Name={<h1>'Никсон, Ричард'</h1>} specialization={'37-й президент Соединённых Штатов Америки (1969—1974), 36-й вице-президент США (1953—1961). Единственный президент США, ушедший в отставку до окончания срока.'} />
<a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D1%81%D0%BE%D0%BD,_%D0%A0%D0%B8%D1%87%D0%B0%D1%80%D0%B4" class="title-lecture" style="text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Richard_Nixon_President.jpg/300px-Richard_Nixon_President.jpg" alt="Foto"></a>
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