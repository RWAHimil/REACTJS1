import { useMemo, useState } from "react";

export default function MEMO() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);

  const multi = useMemo(() => {
    console.log("Multi");
    return count * 5;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <h2>{multi}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h1>{item}</h1>
      <button onClick={() => setItem(item + 5)}>Item</button>
    </>
  );
}
