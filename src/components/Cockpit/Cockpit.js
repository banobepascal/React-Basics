import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  let btnClass = "";
  let showExp = [classes.show];
  let assignedClasses = [classes.green];

  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length === 0) {
    assignedClasses = [classes.show];
    showExp = [classes.red, classes.bold].join(" ");
  }

  return (
    <div className={classes.Cockpit}>
      <h1>You are learning react</h1>
      <p className={assignedClasses}>Results are available</p>
      <p className={showExp}>Sorry no results</p>
      <button className={btnClass} onClick={props.clicked}>
        hide me
      </button>
    </div>
  );
};

export default cockpit;
