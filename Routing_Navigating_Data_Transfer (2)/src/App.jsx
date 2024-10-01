import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import FormShow from "./FormShow";
import DataShow from "./DataShow";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/form")}>Form</button>
      <Routes>
        <Route path="/form" element={<FormShow />}></Route>
        <Route path="/data" element={<DataShow />}></Route>
      </Routes>
    </>
  );
}

export default App;
