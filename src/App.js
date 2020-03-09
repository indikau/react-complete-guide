import React, { Component, createElement } from "react";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!, I'm React App</h1>
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
