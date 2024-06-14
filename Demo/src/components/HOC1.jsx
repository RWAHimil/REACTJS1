/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";

const HOC1 = (WrappedComponent) => {
  const HOC11 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} increment={increment} />;
  };
  return HOC11;
};

export default HOC1;
