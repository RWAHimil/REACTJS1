/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import HOC1 from "./HOC1";

function Higher({ count, increment }) {
  return (
    <>
      <h2 onMouseOver={increment}>Higher Order Component {count}</h2>
    </>
  );
}

export default HOC1(Higher);
