import { app } from "./firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
export default function Main1({ email }) {
  const signOutFun = () => {
    signOut(auth)
      .then(() => console.log("SignOut User..."))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Main</h1>
      <h3>Email : {email}</h3>
      <button onClick={signOutFun}>SignOut</button>
    </div>
  );
}
