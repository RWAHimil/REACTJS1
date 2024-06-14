// App.js
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducer from "./reducer";
import TodoList from "./TodoList";

const store = createStore(todoReducer);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Todo List</h1>
          <TodoList />
        </div>
      </Provider>
    </>
  );
};

export default App;
