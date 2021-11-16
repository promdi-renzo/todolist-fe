import axios from "axios";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";

function AddTask({ cancelAddTask, setDataArray }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [acceptTitle, setAcceptTitle] = useState(false);
  const [acceptDescription, setAcceptDescription] = useState(false);
  const updateDataArray = (data) => {
    setDataArray((prevDataArray) => {
      return [...prevDataArray, data];
    });
  };
  const addStyle = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-200px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
      width: "100%",
      borderBottom: "2px solid #000",
      backgroundColor: "rgba(255,255,255,.5)"
    },
    config: config.stiff
  });
  const handleTitleInput = (e) => {
    const target = e.target;
    if (target.value.length < 2 || target.value.length > 25) {
      target.classList.remove("success-input");
      target.classList.add("error-input");
      setAcceptTitle(false);
    }
    if (target.value.length > 2 && target.value.length < 25) {
      target.classList.remove("error-input");
      target.classList.add("success-input");
      setAcceptTitle(true);
    }
    setNewTitle(target.value);
  };
  const handleDescriptionInput = (e) => {
    const target = e.target;
    if (target.value.length > 50) {
      target.classList.remove("success-input");
      target.classList.add("error-input");
      setAcceptDescription(false);
    }
    if (target.value.length < 50) {
      target.classList.remove("error-input");
      target.classList.add("success-input");
      setAcceptDescription(true);
    }
    setNewDescription(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!acceptTitle || !acceptDescription) {
        return;
      }
      await axios
        .post("https://618f0ee950e24d0017ce1577.mockapi.io/todos", {
          title: newTitle,
          description: newDescription,
        })
        .then((res) => res.data)
        .then((data) => {
          updateDataArray(data);
          setNewTitle("");
          setNewDescription("");
          cancelAddTask();
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <animated.div className="add-task" style={addStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div className="input-group" style={inputGroupStyle}>
          <input
            type="text"
            style={inputStyle}
            placeholder="Add Task Title"
            value={newTitle}
            onChange={handleTitleInput}
          />
          <textarea
            style={inputStyle}
            placeholder="Add Task Description"
            value={newDescription}
            onChange={handleDescriptionInput}
          ></textarea>
        </div>
        <div className="button-group" style={buttonGroupStyle}>
          <button style={cancelButton} onClick={cancelAddTask}>
            Cancel
          </button>
          {newTitle && newTitle.length > 2 ? (
            <button style={submitButton} type="submit">
              Add Task
            </button>
          ) : null}
        </div>
      </form>
    </animated.div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  gap: ".5rem",
};
const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  gap: ".3rem",
};
const buttonGroupStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};
const inputStyle = {
  width: "100%",
  padding: ".5rem",
};
const submitButton = {
  backgroundColor: "#000",
  padding: ".3rem .5rem",
  color: "#fff",
  border: "none",
};
const cancelButton = {
  backgroundColor: "#fff",
  padding: ".3rem .5rem",
  color: "#000",
  border: "1px solid #000",
};
export default AddTask;
