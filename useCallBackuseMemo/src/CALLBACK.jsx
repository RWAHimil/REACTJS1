import { useCallback, useState } from "react";
import A from "./A";

export default function CALLBACK() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(5);
  // const learn = () => {
  //   // some code
  // };
  const learn = useCallback(() => {
    // some code
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <A learn={learn} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 5)}>Add</button>
    </>
  );
}
