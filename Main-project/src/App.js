import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import './Person/Person.css';

class App extends Component {
  state = {
    persons : [
      {name: "Nidhi", age : 24},
      {name: "Nihar", age : 25}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState ({
      persons : [
      {name: newName, age : 24},
      {name: "Nihar", age : 25}
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState ({
      persons : [
      {name: "SriNidhi", age : 24},
      {name: event.target.value, age : 25}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick = {this.switchNameHandler.bind(this,"Nidhiii")}>This is a Button</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, "Angel")}>
        </Person>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          change = {this.nameChangeHandler}>
        </Person>
      </div>
    );
  }
}
export default App;