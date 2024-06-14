import { useState } from "react";

export default function Formvalidation() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [usererr, setUserErr] = useState(false);
  const [passerr, setPassErr] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (user.length < 3 || pass.length < 3) {
      alert("Please enter valid values");
    } else {
      alert("All Good");
      console.log(user);
      console.log(pass);
    }
  };

  const handleUser = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  };

  const handlePass = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPass(item);
  };
  return (
    <>
      <form action="" onSubmit={handleForm}>
        <input type="text" placeholder="Enter UserName" onChange={handleUser} />
        {usererr ? <p>User Not Valid</p> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handlePass}
        />
        {passerr ? <p>Enter Valid Password</p> : ""}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
