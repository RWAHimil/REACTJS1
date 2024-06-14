import { useCallback, useState } from "react";
import ChildA from "./ChildA";

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(1);
  const learning = useCallback(() => {
    // SOme Operation
  }, [add]);
  return (
    <>
      <h1>useCallBack hook</h1>
      <h2>{count}</h2>
      <ChildA Learning={learning} add={add} />
      <button onClick={() => setCount(count + 2)}>Add</button>
      <h2>{add}</h2>
      <button onClick={() => setAdd(add + 2)}>Add</button>
    </>
  );
}
