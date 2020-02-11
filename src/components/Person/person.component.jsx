import React from "react";

const Person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>
        Hi i am {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}  value={props.name}/>
    </div>
  );
};

export default Person;
