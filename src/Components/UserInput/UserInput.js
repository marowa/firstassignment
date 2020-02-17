import React, {Component} from 'react';

const UserInput = (props) => {
    const instyle={
        border: '2px solid red'
    };
    return <input type="text" 
    style={instyle}
    onChange={props.changed} 
    value={props.value}/>
}

export default UserInput;