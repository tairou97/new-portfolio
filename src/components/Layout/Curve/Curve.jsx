import { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import curve from "../Curve/Curve.scss";

const Curve = ({ children }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <div className="page curve">
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
};

const SVG = ({ width, height }) => {
  const initialPath = `M0 300 
  Q${width / 2}
  0${width}300 
  L${width} ${height - 300} 
  Q${width / 2} 0 0 ${height - 300} 
  L0 300 `;
  return (
    <svg>
      <path d={initialPath}></path>
    </svg>
  );
};
export default Curve;
