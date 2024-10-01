import { useState } from "react";
import { app } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const signUpWithPopUp = () => {
    signInWithPopup(auth, googleProvider);
  };

  const SubmitEvent = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((val) => console.log("Success", val))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>SignUp with Email and Password</h1>
      <form action="" onSubmit={SubmitEvent}>
        <input
          type="email"
          placeholder="Enter EMail"
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
        <button onClick={signUpWithPopUp}>SignInWithGoogle</button>
      </form>
    </div>
  );
}
