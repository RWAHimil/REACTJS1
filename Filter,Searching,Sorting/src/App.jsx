// import { useState } from "react";
// import Demo from "./Demo";
// import FilterSearch from "./FilterSearch";
// import Sort from "./Sort";
import Sorting from "./Sorting";
import "./App.css";

// const data = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 20 },
//   { id: 4, name: "Himil", age: 18 }
// ];

const App = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredData, setFilteredData] = useState(data);
  // const [sortOrder, setSortOrder] = useState("asc");

  // const handleSearch = (e) => {
  //   const term = e.target.value;
  //   setSearchTerm(term);
  //   const filtered = data.filter((item) =>
  //     item.name.toLowerCase().includes(term.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };

  // const handleSort = () => {
  //   const sortedData = [...filteredData];
  //   sortedData.sort((a, b) => {
  //     if (sortOrder === "asc") {
  //       return a.age - b.age;
  //     } else {
  //       return b.age - a.age;
  //     }
  //   });
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   setFilteredData(sortedData);
  // };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSort}>Sort by age</button>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul> */}

      {/* <h2>Self</h2> */}
      {/* <Demo /> */}
      {/* <FilterSearch /> */}
      {/* <h2>Sort</h2> */}
      {/* <Sort /> */}
      <hr />
      <hr />
      <h2>
        <u>Sorting</u>
      </h2>
      <Sorting />
    </div>
  );
};

export default App;
