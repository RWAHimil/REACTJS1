// Counter.js
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";
import "../App.css";
import "../index.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(10))}>Decrement</button>
    </div>
  );
};

export default Counter;
