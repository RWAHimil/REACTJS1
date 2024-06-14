import { useLocation, useNavigate } from "react-router-dom";

export default function About() {
  const location = useLocation();
  console.log(location.state);
  console.log(location.state.id1);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact", { state: { name: "Himil", age: "25" } });
  };

  return (
    <>
      <h2>This is About Page</h2>
      <h3>{location.state.id1}</h3>
      <h3>{location.state.id2}</h3>
      {/* <Link to="/contact">Go To Contact Page</Link> */}
      <br />
      <button onClick={handleClick}>Data Pass About To Contact</button>
      {/* <Link to="/">Go To Home Page</Link> */}
    </>
  );
}
