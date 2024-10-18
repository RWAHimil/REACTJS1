import { useState } from "react";
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Success SignIn"))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
          placeholder="Enter Password" // Corrected placeholder
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      Don&apos;t have an account? <Link to="/">Sign Up</Link>
      <br />
      Forgot Password ? <Link to="/passwordreset">Click Here</Link>
    </div>
  );
}
