import { useState } from "react";
import { app } from "./firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((val) => console.log("Success", val))
      .catch((err) => console.log(err));
  };

  const signInWithPopUp = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <h1>SignUp</h1>
      <form action="" onSubmit={signUp}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>SignUp</button>
        <button onClick={signInWithPopUp}>SignInWithPopUp</button>
      </form>
    </>
  );
}
