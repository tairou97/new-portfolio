import React from "react";
import { motion } from "framer-motion";
import "../Inner/Inner.scss";

const Inner = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0vh",
    },
  };

  return (
    <div className="inner">
      <motion.div {...anim(slide)} className="slide" />
      <motion.div {...anim(opacity)} className="page">
        {children}
      </motion.div>
    </div>
  );
};

export default Inner;
