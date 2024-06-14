import { useMemo, useState } from "react";
export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multi = useMemo(() => {
    console.log("Multiply");
    return count * 5;
  }, [count]);
  return (
    <>
      <h1>useMemo Hook</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>Multiply : {multi}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
    </>
  );
}
