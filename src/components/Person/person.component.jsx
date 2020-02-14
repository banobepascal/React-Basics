import React from "react";
import "./person.component.css";
import Radium from "radium";

const Person = props => {
  const style = {
    "@media (max-width: 340px)": {
      width: "90%"
    }
  };
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hi i am {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input style={style} type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
