import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Archived from "./pages/Archived";
import TodoView from "./pages/TodoView";
import { useEffect, useState } from "react";
// import About from './pages/About'

function App() {
  const [willAddTask, setWillAddTask] = useState(false);
  const [DataArray, setDataArray] = useState([]);

  useEffect(() => {
    const url =
      "https://618f0ee950e24d0017ce1577.mockapi.io/api/todos";
    axios.get(url).then((res) => {
      setDataArray(res.data);
    });
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home state={[willAddTask, setWillAddTask]} />}
      />
      <Route
        path="todos"
        element={
          <Todo
            DataArray={DataArray}
            setDataArray={setDataArray}
            state={[willAddTask, setWillAddTask]}
          />
        }
      />
      <Route path="archived" element={<Archived DataArray={DataArray} />} />

      <Route path="/:id" element={<TodoView DataArray={DataArray} />} />
    </Routes>
  );
}

export default App;
