import { useState } from "react";
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");

  const auth = getAuth(app);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email1, password1)
      .then((val) => console.log("Success", val))
      .catch((err) => console.log("User Not Found", err));
  };
  return (
    <div>
      <h1>SignIn with Email and Password</h1>
      <form action="" onSubmit={signIn}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <br />
        <br />
        <button>SignIn</button>
      </form>
    </div>
  );
}
