import BlankData from "../../assets/blank.svg";

import "../../styles/Null.css";
function Blank({ text }) {
  return (
    <div className="null-pages">
      <img src={BlankData} alt="Empty data." loading="lazy" />
      <p>{text}</p>
    </div>
  );
}

export default Blank;
