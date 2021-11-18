import Header from "../components/Header";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import Loading from "./LoadingPages/Loading";
import Blank from "./NullPages/Blank";
import { useEffect, useState } from "react";

function Todo({ DataArray, toggleTask, setDataArray, state }) {
  const [loaded, setLoaded] = useState(false);
  const [willAddTask, setWillAddTask] = state;

  useEffect(() => {
    if (!DataArray) return setLoaded(false);

    setLoaded(true);
  }, [DataArray]);
  const cancelAddTask = () => {
    setWillAddTask(false);
  };

  return loaded ? (
    <div className="list-container">
      <Header title="To Do" state={state} />
      {willAddTask ? (
        <AddTask cancelAddTask={cancelAddTask} setDataArray={setDataArray} />
      ) : null}
      {DataArray.length > 0 ? (
        DataArray.filter((item) => !item.archived).map((item) => (
          <Task
            key={item.id}
            data={DataArray}
            toggleTask={toggleTask}
            task={item}
          />
        ))
      ) : (
        <Blank text="Add task." />
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default Todo;
