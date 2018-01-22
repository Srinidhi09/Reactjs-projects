import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '1px solid red',
        fontSize: '16px'
    }
    return(
        <div className ="UserInput">
            <input type = "text" 
            value = {props.name} 
            onChange = {props.change}
            style = {inputStyle}/>
        </div>
    )
}
export default userInput;