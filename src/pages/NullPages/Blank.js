import Void from "../../assets/void.svg";

import "../../styles/Null.css";
function Blank() {
  return (
    <div className="null-pages">
      <img src={Void} alt="Nothing here." loading="lazy" />
      <p>There is nothing here.</p>
    </div>
  );
}

export default Blank;
