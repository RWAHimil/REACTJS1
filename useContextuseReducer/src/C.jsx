import { useContext } from "react";
import { data, data1 } from "./App";
export default function C() {
  const name = useContext(data);
  const age = useContext(data1);
  return (
    <div>
      <h1>
        {name} {age}
      </h1>
    </div>
  );
}
