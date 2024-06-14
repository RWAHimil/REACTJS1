import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const id = 5;

  const navigate = useNavigate();

  const gotoAbout = () => {
    navigate("/about", { state: { id1: id, id2: "25" } });
  };
  return (
    <>
      <h2>This is Home Page</h2>
      {/* <Link to="/about">Go To About Page</Link> */}
      <button onClick={() => gotoAbout()}>About Page</button>
      <br />
      <Link to="/contact">Go To Contact Page</Link>
    </>
  );
}
