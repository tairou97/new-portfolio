import { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "../Curve/Curve.scss";

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const Curve = ({ children }) => {
  // Get the window dimensions = SVG dimensions
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page curve">
      <div
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
        className="background"
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
};

// SVG
const SVG = ({ width, height }) => {
  const initialPath = `
  M0 300 
  Q${width / 2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 0
`;

  const targetPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 0
`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};

export default Curve;
