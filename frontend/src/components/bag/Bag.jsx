import React from "react";
import { motion } from "framer-motion";
import Order from "./Build/Order/Order";
import Titles from "./Build/Titles/Titles";
import css from "../../assets/styles/Bag/BagStyle.module.scss";
import backgroundfirst from "../../assets/images/Bag/background.png";
import backgroundsecond from "../../assets/images/Bag/background2.png";

export const Bag = () => {
  const datas = new Array(3).fill(1);
  return (
    <section className={css.bagSection}>
      <div className={css.bagSection__titleSection}>
        <img 
          src={backgroundfirst}
          className={css.backgroundLarge} 
        />
        <img 
          src={backgroundsecond}
          className={css.backgroundSmall}
        />
        <div className={css.container}>
          <h1 className={css.bagSection__titleSection__title}>SHOPPING BAG</h1>
        </div>
      </div>
      <motion.div
        className={css.bagSection__ordersSection}
        initial={{
          opacity: 0,
          transitionDuration: "0.2s",
          x: -30,
          transition: { x: "1s", opacity: "1s" },
        }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Titles />
        <div className={css.bagSection__ordersSection__orders}>
          {datas?.map((el, idx) => (
            <Order key={idx} />
          ))}
        </div>
        <div className={css.bagSection__ordersSection__totalSection}>
          <div className={css.bagSection__ordersSection__totalSection__total}>
            <h3>TOTAL PRICE </h3>
            <h3>USD 320.00</h3>
          </div>
        </div>

        <div className={css.bagSection__ordersSection__main_button_section}>
          <button>Go to checkout</button>
          <p>Shipping & taxes calculated a checkout</p>
        </div>
      </motion.div>
    </section>
  );
};
