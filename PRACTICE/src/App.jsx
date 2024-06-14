// import { useState } from "react";
import "./App.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "./firebase";
import ObjForm from "./ObjForm";
// import Demo from "./Demo";
// import UseState from "./UseState";
// import List from "./List";
// import PRACTICE from "./PRACTICE";

const firestore = getFirestore(app);

function App() {
  // const [name, setName] = useState("Himil");
  // const [count, setCount] = useState(0);

  // const handleChange = () => {
  //   setName("HELLO GUYS");
  // };

  const makeCollection = () => {
    addDoc(collection(firestore, "cities"), {
      name: "Delhi",
      pincode: 123456
    });
  };

  const subCollection = () => {
    addDoc(collection(firestore, "cities", "Delhi", "subcities"), {
      name: "Mumbai"
    });
  };

  return (
    <>
      <button onClick={makeCollection}>make Collection</button>
      <button onClick={subCollection}>make Collection</button>
      {/* <h2>My Name is {name}</h2>
      <button onClick={() => setName("RAJ")}>Change</button>
      <button onClick={() => setName("PUSHPRAJ")}>Change</button>
      
      <button onClick={handleChange}>Change</button>

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <hr />
      <Demo />
      <hr />
      <UseState />
      <hr />
      <List />
      <hr />
      <hr />
      <hr />
      <PRACTICE /> */}
      <ObjForm />
    </>
  );
}

export default App;
