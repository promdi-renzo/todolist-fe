import Header from "../components/Header";
import Task from "../components/Task";

import AddTask from "../components/AddTask";

function Todo({ DataArray, setDataArray, state }) {

  const [willAddTask, setWillAddTask] = state;


  const cancelAddTask = () => {
    setWillAddTask(false);
  };
  return (
    <div className="list-container">
      <Header title="To Do" state={state}/>
      {willAddTask ? <AddTask cancelAddTask={cancelAddTask} /> : null}
      {DataArray
        .filter((item) => !item.archived)
        .map((item) => (
          <Task key={item.id} data={DataArray} setData={setDataArray} task={item} />
        ))}
    </div>
  );
}

export default Todo;
