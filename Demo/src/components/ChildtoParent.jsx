/* eslint-disable react/prop-types */
import { useState } from "react";

function ChildtoParent(props) {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };
  return (
    <>
      <h3>Child to Parent</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default ChildtoParent;
