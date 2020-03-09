import React, { Component, createElement } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!, I'm React App</h1>
        <p>This is really working!</p>
        <Person />
        <Person />
        <Person />
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
