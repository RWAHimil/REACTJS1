import { useState } from "react";

export default function ObjectUseState() {
  const [obj, setObj] = useState({ name: "Himil", age: 25, degree: "BE IT" });

  const update = () => {
    setObj({ ...obj, name: "Raj" });
  };

  return (
    <>
      <h2>
        Name : {obj.name} Age : {obj.age} Degree : {obj.degree}
      </h2>
      <button onClick={update}>Clear</button>
    </>
  );
}
