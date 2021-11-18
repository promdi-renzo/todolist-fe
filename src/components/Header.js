import { GoChevronLeft, GoPlus, GoArchive, GoCheck } from "react-icons/go";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Header({ title, setIsCheckedAll, state, sendToArchive, save }) {
  const nav = useNavigate();
  const goto = useCallback(
    (to) => {
      nav(to);
    },
    [nav]
  );

  const ToDoControls = () => {
    const setWillAddTask = state[1];
    const addTask = () => {
      setWillAddTask((prev) => !prev);
    };

    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={() => goto("/")} />
        <GoPlus style={iconStyle} onClick={addTask} />
      </div>
    );
  };
  const ViewTodoControls = () => {
    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={() => goto("/todos")} />
        <GoArchive style={iconStyle} onClick={sendToArchive} />
        <GoCheck style={iconStyle} onClick={save} />
      </div>
    );
  };
  const DefaultControls = () => {
    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={()=>goto('/')}/>
      </div>
    );
  };
  const renderControls = () => {
    switch (title) {
      case "To Do":
        return <ToDoControls />;
      case "View":
        return <ViewTodoControls />;
      default:
        return <DefaultControls />;
    }
  };

  return (
    <div className="header" style={headerStyle}>
      <h2>{title}</h2>
      {renderControls()}
    </div>
  );
}
const controlsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  cursor: "pointer",
};
const headerStyle = {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "rgba(255,255,255,.5)",
  padding: ".3rem 0",
};
const iconStyle = {
  fontSize: "2rem",
};
export default Header;
