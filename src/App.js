import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Todo from "./pages/Todo";
import Archived from "./pages/Archived";
import TodoView from "./pages/TodoView";
// import About from './pages/About'
function App() {
  const dt = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        completed: false,
        archived: false
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        completed: false,
        archived: true
    },
    {
        id: 3,
        title: 'Task 3',
        description: null,
        completed: false,
        archived: true
    },
]
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="todos" element={<Todo DataArray={dt} />} />
        <Route path="archived" element={<Archived DataArray={dt} />} />


        <Route path="/:id" element={<TodoView DataArray={dt} />} />
        <Route path="add" element={<TodoView DataArray={dt} />} />
      </Routes>
  );
}

export default App;
