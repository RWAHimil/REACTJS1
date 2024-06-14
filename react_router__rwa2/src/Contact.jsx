import { useLocation, Link } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  return (
    <>
      <h2>This is Contact Page</h2>
      <h3>This Data Comes from About Component</h3>
      <h4>
        My Name is {location.state.name} and My Age is {location.state.age}
      </h4>
      <Link to="/">Home</Link>
      {/* <Link to="/about">Go To About Page</Link>
      <br />
      <Link to="/">Go To Home Page</Link> */}
    </>
  );
}
