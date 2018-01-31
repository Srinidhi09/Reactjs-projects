import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id : 'sfsfw1', name: "Nidhi", age : 24},
      {id : 'ndfdn9', name: "Nihar", age : 25},
      {id : 'ndfsds', name: "Sam", age : 30}
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
      backgroundColor: 'green',
      border: '1px solid black',
      font: 'inherit',
      color: 'white',
      padding: '10px',
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
      buttonStyle.backgroundColor = "red";
    }

    const classes = [];
    if(this.state.persons.length <=2 ){
      classes.push('red');
    }
    if(this.state.persons.length <=1 ){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <p className = {classes.join(' ')}>My First React JS Project</p>
        <button 
        style = {buttonStyle}
        onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}
export default App;