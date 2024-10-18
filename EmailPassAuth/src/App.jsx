import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { onAuthStateChanged } from "firebase/auth";
import Main1 from "./Main1";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";
import { Routes, Route } from "react-router-dom";
import PasswordAuth from "./PasswordAuth";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <Main1 email={user.email} />
      ) : (
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/passwordreset" element={<PasswordAuth />} />
        </Routes>
      )}
    </>
  );
}

export default App;
