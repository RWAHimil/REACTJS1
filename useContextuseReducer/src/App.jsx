import { createContext, useReducer } from "react";
import A from "./A";
import "./App.css";

const data = createContext();
const data1 = createContext();

const initialState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "Incre":
      return { count: state.count + 1 };

    case "Decre":
      return { count: state.count - 1 };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const name = "XYZ";
  const age = 25;
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <A />
        </data1.Provider>
      </data.Provider>
      <hr />
      <hr />
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Incre" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decre" })}>Decrement</button>
    </>
  );
}

export default App;
// eslint-disable-next-line react-refresh/only-export-components
export { data, data1 };
