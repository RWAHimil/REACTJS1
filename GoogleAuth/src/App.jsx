import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("Hello", user);
        setUser(user);
      } else {
        // console.log("User is Logged Out");
        setUser(null);
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
      <h1>{user.email}</h1>
      <button onClick={() => signOut(auth)}>LogOut</button>
    </>
  );
}

export default App;
