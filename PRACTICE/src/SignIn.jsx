import { useState } from "react";
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((val) => console.log("Success", val))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>SignIn</h1>
      <form action="" onSubmit={signIn}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>SignIn</button>
      </form>
    </>
  );
}
