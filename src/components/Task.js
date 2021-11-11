import { Link } from "react-router-dom";
import "../styles/checkbox.css";

function Task({ data, task, setData }) {
  const box = {
    backgroundColor: task.completed ? "#000" : "#fff",
  };
  const setCompleted = () => {
    const newdata = data.map((item) => {
      if (item.id === task.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setData(newdata);
    console.log(newdata);
  };

  return (
    <div style={taskStyle}>
      <div style={parentStyle}>
        {/* our custom checkbox */}
        <div className="checkbox" onClick={setCompleted}>
          <input type="checkbox" checked={task.completed} readOnly="yes" />
          <span style={box} className="mark"></span>
        </div>

        <div style={childStyle}>
          <h3>
            <Link to={"/" + task.id}>{task.title}</Link>
          </h3>
          <p>{task.description}</p>
        </div>
      </div>
    </div>
  );
}

const taskStyle = {
  width: "100%",
  borderBottom: "1px dashed #000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,.3)",
};
const parentStyle = {
  width: "100%",
  height: "auto",
  padding: "1rem 2rem",
  margin: ".5rem 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  gap: "1rem",
};

const childStyle = {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Architects Daughter, cursive",
};

export default Task;
