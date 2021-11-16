import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "./LoadingPages/Loading";
import TaskArchived from "../components/TaskArchived";
function Archived({ DataArray, setDataArray }) {
  const [ArchivedArray, setArchivedArray] = useState(null);

  useEffect(() => {
    const archivedArray = DataArray.filter((item) => item.archived);
    setArchivedArray(archivedArray);
  }, [DataArray]);

  return (
    <div className="list-container">
      <Header title="Archived" />
      {
        ArchivedArray ? ArchivedArray.filter((item) => item.archived).map((item) => (
          <TaskArchived
            key={item.id}
            data={DataArray}
            setData={setDataArray}
            task={item}
          />
        ))
        :
        <Loading />
      }
    </div>
  );
}

export default Archived;
