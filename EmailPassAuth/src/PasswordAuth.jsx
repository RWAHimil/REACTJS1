import { useState } from "react";
import { app } from "./firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);
export default function PasswordAuth() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => setMessage("Check your email for password reset link!"))
      .catch((err) => console.log(err));
    setEmail("");
    e.target.reset();
  };
  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handlePasswordReset}>
        <input
          type="email"
          placeholder="Enter EMail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button>Send Reset Link</button>
      </form>
      Return to SignIn page ? <Link to="/signIn">SignIn</Link>
    </div>
  );
}
