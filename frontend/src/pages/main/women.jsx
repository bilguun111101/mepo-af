import { motion } from "framer-motion";
import { RouterAnimation } from "../../utils/animationVariants";
import { useEffect, useState } from "react";
import { getAPI } from "../../utils/fetchingProduct";

const Women = () => {
  return (
    <div>
      <motion.div
        variants={RouterAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        style={{ position: "relative", top: 100 }}
      ></motion.div>
      <div></div>
    </div>
  );
};

export default Women;
