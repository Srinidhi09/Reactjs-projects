import React from 'react';

const Validation = (props) => {
    
    let validate = <p>Text long enough</p>;

    if(props.inputLength <= 5){
        validate = <p>Text too short!</p>;
    }
    return (
        <div>
            {validate}
        </div>
    );
};

export default Validation;