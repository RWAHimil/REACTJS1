import { useState } from "react";

export default function UseState() {
  // console.log(useState);
  // console.log(useState("Thor"));

  // let myValue = useState("America")[0];
  // console.log(myValue);

  // let value = "Yahoo Baba";

  // function changeValue() {
  //   let value = "Baba Yahoo";
  //   console.log(value);
  // }

  const [name, setName] = useState("Himil");

  const clickMe = () => {
    // setName("Pushpraj");

    if (name === "Himil") {
      setName("Pushpraj");
    } else {
      setName("Himil");
    }
  };

  return (
    <>
      {/* <h1>{value}</h1> */}
      {/* <button onClick={changeValue}>Change Value</button> */}

      <h1>{name}</h1>
      <button onClick={clickMe}>Toggle UseState</button>
    </>
  );
}
