import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Indika", age: "30" },
      { name: "Jenadi", age: "12" },
      { name: "Ranuga", age: "15" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi!, I'm React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Swimming
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Does this work now?")
    // );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi!, I'm React App</h1>
//     </div>
//   );
// }

export default App;
