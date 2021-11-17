import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./LoadingPages/Loading";
import Header from "../components/Header";


function TodoView({ DataArray, fetchData }) {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [todo, setTodo] = useState(null);
  const [ hasError, setHasError ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://618f0ee950e24d0017ce1577.mockapi.io/todos/${id}`)
        .then((res) => res.data)
        .then((data) => {
          if(data.archived) window.location.href = "/todos";

          setTodo(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [id]);

  const saveChanges = async () => {
    const prevTodo = DataArray.find((todo) => todo.id === id);

    if(prevTodo.title !== todo.title || prevTodo.description !== todo.description) {
      return await axios
      .put(`https://618f0ee950e24d0017ce1577.mockapi.io/todos/${id}`, todo)
      .then(() => {
        fetchData((err, res)=>{
          if(err) throw err;
          window.location.href = "/todos";
        });
      })
      .catch((err) => console.log(err));
    }
    return console.log("No changes!");
  }

  const sendToArchive = async () => {
    await axios.put(`https://618f0ee950e24d0017ce1577.mockapi.io/todos/${id}`, {
      ...todo,
      archived: true,
    })
    .then(()=>{
      window.location.href = "/todos";
    })
    .catch((err) => console.log(err));
  };
  const handleTitleInput = (e) => {
    const length = e.target.value.length;
    if( length < 25 ) setTodo({ ...todo, title: e.target.value });
  };
  const handleDescriptionInput = (e) => {
    const length = e.target.value.length;
    if(length <= 50) setTodo({ ...todo, description: e.target.value });
  };

  return isLoaded ? (
    <div className="todo-view">
      <Header title="View" sendToArchive={sendToArchive} save={saveChanges} fetchData={fetchData} />
      <form style={formStyle}>
        <div className="todo-data-inputs" style={dataInputGroupStyle}>
          <label htmlFor="title">
            <h4>Title</h4>
            <input
              style={inputStyle}
              name="title"
              id="title"
              value={todo.title}
              onChange={handleTitleInput}
            />
          </label>
          <label htmlFor="description">
            <h4>Description</h4>
            <textarea
              style={descStyle}
              name="title"
              id="description"
              value={todo.description}
              onChange={handleDescriptionInput}
            />
          </label>
        </div>
        <div className=""></div>
      </form>
    </div>
  ) : (
    <Loading />
  );
}
const dataInputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: "1rem",
};
const inputStyle = {
  width: "100%",
  height: "auto",
  border: "none",
  borderBottom: "1px solid #000",
  background: "transparent",
  padding: ".3rem",
  fontSize: "1.5rem",
  fontWeight: "900",
  wordBreak: "break-all",
  wordWrap: "break-word",
};
const descStyle = {
  width: "100%",
  height: "100%",
  col: 25,
  border: "none",
  borderBottom: "1px solid #000",
  background: "transparent",
  padding: ".3rem",
  fontSize: "1.2rem",
  fontWeight: "900",
  wordBreak: "break-all",
  wordWrap: "break-word"
};
export default TodoView;
