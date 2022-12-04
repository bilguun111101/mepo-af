import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import css from "../../assets/styles/Payment/PaymentStyle.module.scss";

// import sections
import { Pocket, Summary, ContactInformation } from "./Build";

// import context
import { usePaymentContext } from "../../context/paymentContext";

export const Payment = () => {
  const datas = new Array(2).fill(1);
  const { openPocket, setOpenPocket } = usePaymentContext();
  const [switchSections, setSwitchSections] = useState(false);
  const switchBtn = () => {
    setSwitchSections(true);
  };
  return (
    <motion.div
      className={css.bagSection}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <ContactInformation switchSections={switchSections} />
      <Summary
        datas={datas}
        switchBtn={switchBtn}
        switchSections={switchSections}
      />
      {openPocket ? <Pocket /> : <div />}
    </motion.div>
  );
};
