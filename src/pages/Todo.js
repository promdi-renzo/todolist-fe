import { useState } from "react";
import Header from "../components/Header";
import Task from "../components/Task";

import AddTask from "../components/AddTask";

function Todo({ DataArray, state }) {

  const [willAddTask, setWillAddTask] = state;
  const [data, setData] = useState(DataArray);


  const cancelAddTask = () => {
    setWillAddTask(false);
  };
  return (
    <div className="list-container">
      <Header title="To Do" state={state}/>
      {willAddTask ? <AddTask cancelAddTask={cancelAddTask} /> : null}
      {data
        .filter((item) => !item.archived)
        .map((item) => (
          <Task key={item.id} data={data} setData={setData} task={item} />
        ))}
    </div>
  );
}

export default Todo;
