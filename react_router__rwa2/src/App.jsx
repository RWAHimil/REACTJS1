import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Contact from "./Contact";
// import Home from "./Home";
// import About from "./About";
import Demo from "./Demo";
import Demo1 from "./Demo1";

function App() {
  return (
    <>
      {/* <Link to="/">Home</Link> */}

      <h1>React Router Dom</h1>
      <Routes>
        {/* <Route path="/" element={<div>I am Home Page</div>} />
        <Route path="/contact" element={<div>I am Contact Page</div>} />
        <Route path="/about" element={<div>I am About Page</div>} /> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> */}

        <Route path="/demo" element={<Demo />} />
        <Route path="/demo1" element={<Demo1 />} />
      </Routes>
    </>
  );
}

export default App;
