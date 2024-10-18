import { useState } from "react";

export default function Form() {
  const [obj, setObj] = useState({
    name: "",
    password: ""
  });

  const [demo, setDemo] = useState({
    movie: "John Wick",
    year: 2024
  });

  const [edit, setEdit] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(obj.name, obj.password);
    e.target.reset();
  };

  return (
    <>
      <h3>Movie : {demo.movie}</h3>
      <h3>Year : {demo.year}</h3>
      <button onClick={() => setDemo({ ...demo, movie: "Avengers" })}>
        Click ME
      </button>
      <button onClick={() => setDemo({ year: 2013 })}>Click ME</button>
      <hr />
      <hr />
      <form action="" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setObj({ ...obj, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setObj({ ...obj, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit" onClick={(i) => setEdit(i)}>
          Submit
        </button>
      </form>
      <br />
      <br />
      {edit !== null ? (
        <>
          <h2>Name : {obj.name}</h2>
          <h2>Password : {obj.password}</h2>
        </>
      ) : (
        ""
      )}
    </>
  );
}
