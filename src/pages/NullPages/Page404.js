import Err404 from "../../assets/error_404.svg";

import "../../styles/Null.css";
function Page404() {
  return (
    <div className="null-pages">
      <img src={Err404} alt="Nothing here." loading="lazy" />
      <p>
        Are you lost? Go <a href="/">home</a>.
      </p>
    </div>
  );
}

export default Page404;
