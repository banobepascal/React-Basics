import React, { Component } from "react";
import "./App.css";

import Person from "./components/Person/person.component";

class App extends Component {
  state = {
    persons: [
      { name: "Pascal", year: 30 },
      { name: "Pauline", year: 20 },
      { name: "Pius", year: 18 }
    ],
    otherState: "some other state"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, year: 30 },
        { name: "Joan", year: 20 },
        { name: "Pius", year: 28 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Pascal", year: 30 },
        { name: event.target.value, year: 20 },
        { name: "Pius", year: 28 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>You are learning react</h1>
        <button onClick={() => this.switchNameHandler("Paul")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].year}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].year}
          click={this.switchNameHandler.bind(this, "Pascal!!")}
          changed={this.nameChangedHandler}
        >
          I like Swimming
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].year}
        />
      </div>
    );
  }
}

export default App;
