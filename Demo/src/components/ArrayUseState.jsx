import { useState } from "react";

export default function ArrayUseState() {
  const bioData = [
    { id: 0, name: "Himil", age: 18 },
    { id: 1, name: "Raj", age: 17 },
    { id: 2, name: "Pushpraj", age: 20 }
  ];

  // const clear = () => {
  //   bioData = [];
  // };

  const [myBio, setMyBio] = useState(bioData);

  const clear = () => {
    setMyBio([]);
  };

  return (
    <>
      {myBio.map((ele) => {
        return (
          <>
            <h2 key={ele.id}>
              My Name is {ele.name} and My Age is {ele.age}
            </h2>
          </>
        );
      })}
      <button onClick={clear}>Clear</button>
    </>
  );
}
