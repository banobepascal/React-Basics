import React from 'react';

const UserInput = (props) => {
    return (
        <input type="text" onChange={props.changed} value={props.currentName}/>
    );
}

export default UserInput;
