import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Indika", age: "30" },
      { name: "Jenadi", age: "12" },
      { name: "Ranuga", age: "15" }
    ],
    otherState: "Some other value"
  });

  const [otherState, setOtherState] = useState("Some other value");

  console.log(personsState, otherState);
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Indika Rasika", age: "30" },
        { name: "Jenadi", age: "12" },
        { name: "Ranuga", age: "7" }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi!, I'm React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Swimming
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};
export default App;
