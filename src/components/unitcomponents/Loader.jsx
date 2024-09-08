import React, { useEffect } from "react";
import "../../styles/unit_styles/loader.css";
import { useSelector } from "react-redux";
function Loader() {
  const isDark = useSelector((state) => state.root.isDark);
  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "#1a1a1a";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [isDark]);
  return (
    <div>
      <div className="loader absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] ">
        <div class="spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
