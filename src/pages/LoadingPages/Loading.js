import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import "../../styles/Loader.css";

function Loading() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.to(q(".loading"), {
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="loading-container">
      <div className="loadingio-spinner-bean-eater-6ddcwj3mn8g">
        <div className="ldio-mhhl7o308df">
          <div></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
