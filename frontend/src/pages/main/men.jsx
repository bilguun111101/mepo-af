import { motion } from "framer-motion";
import { RouterAnimation } from "../../utils/animationVariants";
import { useEffect, useState } from "react";
import { getAPI } from "../../utils/fetchingProduct";
import { ProductCart } from "../../components/product/ProductCart";

import React from "react";
const Men = () => {
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
      {/* <div>
        {product.map((item, id) => (
          <ProductCart item={item} type={"product"} />
        ))}
      </div> */}
    </div>
  );
};
export default Men;
