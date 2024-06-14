import { useEffect, useState } from "react";

export default function USeEffectLC() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    return function () {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Updated " + counter);

    return function () {
      console.log("Unmount Counter  " + counter);
    };
  }, [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>INC</button>
    </>
  );
}
