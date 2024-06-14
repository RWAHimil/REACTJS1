/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import HOC1 from "./HOC1";

function Button(props) {
  return (
    <>
      <button onClick={props.increment}>Click {props.count} Times</button>
    </>
  );
}

export default HOC1(Button);
