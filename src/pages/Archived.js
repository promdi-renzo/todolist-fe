import { useState } from "react";
import Header from "../components/Header";
import TaskArchived from "../components/TaskArchived";
function Archived({ DataArray }) {
  const [data, setData] = useState(DataArray);
    const [isCheckedAll, setIsCheckedAll] = useState(false);


  return (
    <div className="list-container">
      <Header title="Archived" setIsCheckedAll={setIsCheckedAll}/>
      {data
        .filter((item) => item.archived)    
        .map((item) => (
          <TaskArchived key={item.id} data={data} setData={setData} task={item} checked={isCheckedAll} />
        ))}
    </div>
  );
}

export default Archived;
