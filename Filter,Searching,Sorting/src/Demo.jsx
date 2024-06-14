import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [list, setList] = useState([
    "Orange",
    "Apple",
    "Banana",
    "Mango",
    "Cherry"
  ]);

  const filterEvent = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
    if (e.target.value) {
      let result = list.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log("result", result);
      setList(result);
    } else {
      setList(["Orange", "Apple", "Banana", "Mango", "Cherry"]);
    }
  };  

  return (
    <div className="App">
      <input value={val} onChange={(e) => filterEvent(e)} />
      {list.map((item) => {
        return (
          <>
            <div>{item}</div>
          </>
        );
      })}
    </div>
  );
}

export default App;
