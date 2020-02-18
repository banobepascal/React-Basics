import React from "react";
import classes from "./person.css";

const Person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Hi i am {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
