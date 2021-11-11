import { GoChevronLeft, GoPlus, GoSearch, GoHistory, GoTasklist } from "react-icons/go";
function Header({ title, setIsCheckedAll }) {

  const ToDoControls = () => {
    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={goBack} />
        <GoPlus style={iconStyle} />
        <GoSearch style={iconStyle} />
      </div>
    );
  };
  const ArchivedControls = () => {

    const unArchive = () => {
      setIsCheckedAll(false);
    };

    const checkAll = () => {
      setIsCheckedAll((r)=>!r);
    };

    return (
      <div className="controls" style={controlsStyle}>
        <GoChevronLeft style={iconStyle} onClick={goBack} />
        <GoHistory style={iconStyle} onClick={unArchive}/>
        <GoTasklist style={iconStyle} onClick={checkAll} />
      </div>
    );
  };
  const renderControls = () => {
    switch (title) {
      case "To Do":
        return <ToDoControls />;
      case "Archived":
        return <ArchivedControls />;
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
