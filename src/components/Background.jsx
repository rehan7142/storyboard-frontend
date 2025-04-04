import { motion } from "motion/react";
import React from "react";

const Background = () => {
  return (
    <motion.div
    initial={{x:0, y:0}}
    animate={{x:[0, 40, 60, 0], y:[0, -30, 10, 0]}}
    transition={{duration:5, repeat:Infinity, ease:"linear"}}
    className="h-full w-full absolute">
    <div className={`bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-[20%] left-[55%] -translate-x-1/2 -translate-y-1/2`}></div>
    <div className={`bg-circle-green rounded-full h-[12vw] w-[12vw] absolute top-[75%] left-[35%] -translate-x-1/2 -translate-y-1/2`}></div>
    <div className={`bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-[85%] left-[90%] -translate-x-1/2 -translate-y-1/2`}></div>
    </motion. div>
  );
};

export default Background;
