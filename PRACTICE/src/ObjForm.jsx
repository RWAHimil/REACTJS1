import { useState } from "react";

function ObjForm() {
  const [person, setPerson] = useState({
    name: "John Doe",
    age: 30,
    occupation: "Developer"
  });

  return (
    <div>
      <h1>{person.name}</h1>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
      <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

export default ObjForm;
