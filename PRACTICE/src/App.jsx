import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { app } from "./firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [user, setuser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In", "Hello", user.email);
        setuser(user);
      } else {
        console.log("User logged Out");
        setuser(null);
      }
    });
  }, [auth]);

  if (user === null) {
    return (
      <>
        <SignUp />
        <SignIn />
      </>
    );
  }

  return (
    <>
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>LogOut</button>
    </>
  );
}

export default App;
