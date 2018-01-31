import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 600px)' : {
            width:  '450px'
        }
    }
    return (
    <div className = "Person" style = {style}>
        <p onClick = {props.click}>Hi, I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
        <input type ="text" 
        value = {props.name}
        onChange = {props.change}/>
    </div>
    )
};

export default Radium(person);