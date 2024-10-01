import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "./Action";

function Display() {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();

  const deleteTODO = (i) => {
    dispatch(Delete(i));
  };

  const editTodo = (index, newValue) => {
    dispatch(Edit({ index, newValue }));
  };

  const toggleComplete = (index) => {
    const newValue = data[index].includes(" - Completed")
      ? data[index].replace(" - Completed", "")
      : data[index] + " - Completed";
    editTodo(index, newValue);
  };

  return (
    <div>
      <h1>Display</h1>
      {data.map((ele, i) => (
        <div
          key={i}
          style={{
            textDecoration: ele.includes(" - Completed")
              ? "line-through"
              : "none"
          }}
        >
          <li onClick={() => toggleComplete(i)}>{ele}</li>
          <button onClick={() => deleteTODO(i)}>Delete</button>
          <button
            onClick={() => {
              const newValue = prompt("Enter Value");
              if (newValue !== null) {
                editTodo(i, newValue);
              }
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Display;
