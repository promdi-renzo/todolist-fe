import {
  GoChevronLeft,
  GoPlus,
  GoArchive,
  GoCheck
} from "react-icons/go";

function Header({ title, setIsCheckedAll, state, sendToArchive, save }) {
  const ToDoControls = () => {
    const setWillAddTask = state[1];
    const addTask = () => {
      setWillAddTask((prev) => !prev);
    };

    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={goBack} />
        <GoPlus style={iconStyle} onClick={addTask} />
      </div>
    );
  };
  const ViewTodoControls = () => {
    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={goBack} />
        <GoArchive style={iconStyle} onClick={sendToArchive} /> 
        <GoCheck style={iconStyle} onClick={save} />
      </div>
    );
  }
  const ArchivedControls = () => {

    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={goBack} />
      </div>
    );
  };
  const renderControls = () => {
    switch (title) {
      case "To Do":
        return <ToDoControls />;
      case "Archived":
        return <ArchivedControls />;
      case "View":
        return <ViewTodoControls />;
      default:
        return <></>;
    }
  };

  const goBack = () => {
    return window.history.back();
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
