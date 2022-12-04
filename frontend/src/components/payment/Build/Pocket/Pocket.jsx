import React from "react";
import { motion } from "framer-motion";
import logo from "../../../../assets/images/Payment/pocket.png";
import poc from "../../../../assets/styles/Payment/PocketStyle.module.scss";
import { usePaymentContext } from "../../../../context/paymentContext";

export const Pocket = () => {
  const { openPocket, setOpenPocket } = usePaymentContext();
  return (
    <motion.div
      className={poc.pocketSection}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
    >
      <div className={poc.pocketSection__pocket}>
        <button className={poc.closeBtn} onClick={() => setOpenPocket(false)}>
          x
        </button>
        <div className={poc.pocketSection__pocket__content}>
          <div className={poc.pocketSection__pocket__content__titleSection}>
            <img src={logo} alt="" className={poc.pocketLogo} />
            <p>Pocket pay</p>
          </div>
          <div className={poc.pocketSection__pocket__content__qrCodeSection}>
            <img
              src="https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-icon-svg-wikimedia-commons-23.png"
              alt=""
            />
          </div>
          <p>You can read this QR code in your pocked app</p>
        </div>
      </div>
    </motion.div>
  );
};
