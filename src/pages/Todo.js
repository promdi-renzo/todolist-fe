import { useState } from "react";
import Header from "../components/Header";
import Task from "../components/Task";
function Todo({ DataArray, willAddTask}) {
  const [data, setData] = useState(DataArray);

  return (
    <div className="list-container">
      <Header title="To Do" />
      {data
        .filter((item) => !item.archived)
        .map((item) => (
          <Task key={item.id} data={data} setData={setData} task={item} />
        ))}
    </div>
  );
}

export default Todo;
