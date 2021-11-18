import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "./LoadingPages/Loading";
import TaskArchived from "../components/TaskArchived";
import Blank from "./NullPages/Blank";
function Archived({ DataArray, setDataArray }) {
  const [ArchivedArray, setArchivedArray] = useState(null);

  useEffect(() => {
    const archivedArray = DataArray.filter((item) => item.archived);
    setArchivedArray(archivedArray);
  }, [DataArray]);

  return ArchivedArray ? (
    <div className="list-container">
      <Header title="Archived" />
      {
        ArchivedArray>0 ? ArchivedArray.filter((item) => item.archived).map((item)=> (
          <TaskArchived
            key={item.id}
            data={DataArray}
            setData={setDataArray}
            task={item}
          />
        ))
        :
        <Blank text="No Archived tasks."/>
      }
    </div>
  )
  :
  <Loading />
}

export default Archived;
