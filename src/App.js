import React, { Component } from "react";
import Radium, {StyleRoot} from 'radium';
import "./App.css";


import Person from "./components/Person/person.component";

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
    const style = {
      backgroundColor: "#ed5565",
      textTransform: "uppercase",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "8px",
      fontWeight: 'Bold',
      letterSpacing: '2px',
      ':hover': {
        backgroundColor: 'rgb(4, 136, 141)',
        color: '#fff'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'aqua';
      style.color = '#000';
    }

    let showMe = ['show'];
    let classes = ['green'];
    if (this.state.persons.length === 0) {
      classes = ['show'];
      showMe = ['red', 'bold'].join(' ');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>You are learning react</h1>
        <p className={classes}>Results are available</p>
        <p className={showMe}>Sorry no results</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          hide me
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
