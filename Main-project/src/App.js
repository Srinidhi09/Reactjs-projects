import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import './Person/Person.css';

class App extends Component {
  state = {
    persons : [
      {id : 'sfsfw1', name: "Nidhi", age : 24},
      {id : 'ndfdn9', name: "Nihar", age : 25}
    ],
    showPersons : false
  }

  nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex( p => {
    return p.id === id;
  });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState ({ persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState ({
          showPersons : !doesShow
    })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }
  
  render() {
    const buttonStyle = {
      backgroundColor: 'darkblue',
      border: '1px solid blue',
      font: 'inherit',
      color: 'white',
      padding: '10px'
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            click = {() => this.deletePersonsHandler(index)}
            change = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <button 
        style = {buttonStyle}
        onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}
export default App;