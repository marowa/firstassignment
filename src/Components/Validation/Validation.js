import React from 'react';

const validation = (props) =>{

    let validationMSG='Text Short';
    if(props.inputLength>5){
        validationMSG='Text Long';
    }

    return(
        <div>
            <p>{validationMSG}</p>
        </div>
    );
};

export default validation;