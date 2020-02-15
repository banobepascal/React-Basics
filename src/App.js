import React, { Component } from "react";
import classes from "./App.css";

import Person from "./Person/person.component";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.component";

class App extends Component {
  state = {
    persons: [
      { id: "asf1", name: "Pascal", year: 30 },
      { id: "asf2", name: "Pauline", year: 20 },
      { id: "asf3", name: "Pius", year: 18 }
    ],
    otherState: "some other state",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]; // array destructuring es6 syntax
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let showExp = [classes.show];
    let assignedClasses = [classes.green];
    if (this.state.persons.length === 0) {
      assignedClasses = [classes.show];
      showExp = [classes.red, classes.bold].join(" ");
    }

    return (
      <div className={classes.App}>
        <h1>You are learning react</h1>
        <p className={assignedClasses}>Results are available</p>
        <p className={showExp}>Sorry no results</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          hide me
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
