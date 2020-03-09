import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!, I'm React App</h1>
        <p>This is really working!</p>
        <Person name="Indika" age="30" />
        <Person name="Jenadi" age="12">
          My Hobbies: Swimming
        </Person>
        <Person name="Ranuga" age="15" />
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
