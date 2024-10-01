import { useEffect, useState } from "react";

export default function Sorting() {
  const [list, setList] = useState(() => {
    const storedData = localStorage.getItem("sortData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [inputValue, setInputValue] = useState({
    name: "",
    password: ""
  });
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    localStorage.setItem("sortData", JSON.stringify(list));
  }, [list]);

  const handleFormSubmit = () => {
    if (inputValue.name === "") {
      alert("Please enter a name");
    } else if (inputValue.name.length < 2) {
      alert("Please Enter More Than 2 Characters");
    } else if (inputValue.password === "") {
      alert("Please Enter a Password");
    } else if (inputValue.password < 8) {
      alert("Please Enter More Than 8 Characters");
    } else {
      setList([...list, inputValue]);
      setInputValue({ name: "", password: "" });
      setEdit(null);
    }
  };

  const handleEdit = (index) => {
    const originalIndex = sortedList.indexOf(filterList[index]);
    setEdit(originalIndex);
    setInputValue({
      name: filterList[index].name,
      password: filterList[index].password
    });
  };

  const handleSave = () => {
    const updatedList = [...list];
    updatedList[edit] = inputValue;
    setList(updatedList);
    setInputValue({ name: "", password: "" });
    setEdit(null);
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortedList = sort
    ? [...list].sort((a, b) => {
        const comparison = a[sort].localeCompare(b[sort]);
        return sortDirection === "asc" ? comparison : -comparison;
      })
    : list;

  const filterList = sortedList.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.password.toLowerCase().includes(search.toLowerCase())
  );

  const handleSort = (field) => {
    if (field === sort) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSort(field);
      setSortDirection("asc");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue.name}
        onChange={(e) => {
          setInputValue({ ...inputValue, name: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={inputValue.password}
        onChange={(e) => {
          setInputValue({ ...inputValue, password: e.target.value });
        }}
      />
      <br />
      <br />
      {edit === null ? (
        <button
          onClick={() => {
            handleFormSubmit();
          }}
        >
          Add Data
        </button>
      ) : (
        <button
          onClick={() => {
            handleSave();
          }}
        >
          Save Changes
        </button>
      )}
      <br />
      <br />
      <input
        type="text"
        placeholder="Search Here..."
        value={search}
        onChange={handleSearch}
      />
      <hr />
      {list.length > 0 ? (
        <table border={1}>
          <tr>
            <th>Sr No</th>
            <th>
              Name <button onClick={() => handleSort("name")}> &uarr;</button>{" "}
            </th>
            <th>
              Password
              <button onClick={() => handleSort("password")}>&uarr;</button>
            </th>
            <th>Actions</th>
          </tr>
          {filterList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(index);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      ) : null}
    </>
  );
}
