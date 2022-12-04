import classes from "../../assets/styles/home.module.scss";
import { HomeScrollAnimation } from "./home-scroll_animation";
import { HomeSlide } from "./home-slider";
import { RouterAnimation } from "../../utils/animationVariants";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  const [resize, setResize] = useState(window.innerWidth);
  useEffect(() => {
    const handle = (event) => {
      setResize(event.target.innerWidth);
      console.log(event.target.innerWidth);
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [resize]);
  console.log(resize);
  return (
    <>
      <motion.div
        variants={RouterAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        className={classes.home}
      >
        <section className={classes.home_product_promo_text}>
          <h2 className={classes.home_product_promo_text_top}>
            A New Look at Fashion of the MEPO AF
          </h2>
          <h3 className={classes.home_product_promo_text_bottom}>
            EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE
          </h3>
        </section>
        <HomeSlide />
        <h1 className={classes.home_collections_text}>Our collections</h1>
        <section id="animation" className={classes.home_scroll_animation}>
          <HomeScrollAnimation resize={resize} />
        </section>
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
        ></div>
      </motion.div>
    </>
  );
};
