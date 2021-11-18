import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Archived from "./pages/Archived";
import TodoView from "./pages/TodoView";
import { useEffect, useState } from "react";
import About from './pages/About'

function App() {
  const [willAddTask, setWillAddTask] = useState(false);
  const [DataArray, setDataArray] = useState([]);
  const [hasError, setHasError] = useState(false);

  const fetchData = async (callback) => {
    const url = "https://618f0ee950e24d0017ce1577.mockapi.io/todos";
    try {
      await axios
        .get(url)
        .then((res) => {
          setDataArray(res.data);
          return callback(null, res.data);
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      return callback(error);
    }
  };

  useEffect(() => {
    fetchData((err, data) => {
      if (err) {
        return setHasError(true);
      }
      return setHasError(false);
    });
  }, []);

  const toggleTask = (id) => {
    try {
      const newDataArray = DataArray.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
            axios.put(
              `https://618f0ee950e24d0017ce1577.mockapi.io/todos/${id}`,
              item
            )
        }
        return item;
      });
      setDataArray(newDataArray);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home state={[willAddTask, setWillAddTask]} hasError={hasError}/>}
      />
      <Route
        path="todos"
        element={
          <Todo
            DataArray={DataArray}
            setDataArray={setDataArray}
            toggleTask={toggleTask}
            state={[willAddTask, setWillAddTask]}
          />
        }
      />
      <Route path="archived" element={<Archived DataArray={DataArray} />} />
      <Route path="about" element={<About />} />

      <Route
        path="/:id"
        element={<TodoView DataArray={DataArray} fetchData={fetchData} hasError={hasError} />}
      />
    </Routes>
  );
}

export default App;
