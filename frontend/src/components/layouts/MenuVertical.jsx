import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import BagIcon from "../../assets/images/bag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { langNavbarMobile } from "../../utils/constants";
import { GlobalContext } from "../../context/GlobalContext";
import closeIcon from "../../assets/images/close-white.svg";
import classes from "../../assets/styles/header.module.scss";
import MenuIcon from "../../assets/images/hamburger-menu.svg";
import { navbarDropdownAnimation } from "../../utils/animationVariants";

export const MenuVertical = () => {
  const [onMenu, setOnMenu] = useState(false);
  const {
    language: { lang, setLang },
    loginOpen: { setIsLoginOpen },
  } = useContext(GlobalContext);
  const openLoginComp = () => {
    setIsLoginOpen(true);
    setOnMenu(false);
  };
  const closeDrop = () => {
    setOnMenu(false);
  };
  return (
    <>
      <div className={classes.mobileHeader}>
        <div onClick={() => setOnMenu(true)} className={classes.mobileHeader_icon}>
          <img src={MenuIcon} alt="menuIcon" />
        </div>
        <Link to={"/"} className={classes.mobileHeader_image_container}>
          <img alt="mepoAfLogo" src="https://res.cloudinary.com/mustnest/image/upload/v1669191520/Mepo_Af/logoBlack_awmpvg.png" />
        </Link>
        <div className={classes.mobileHeader_icon}>
          <a href="/bag">
            <img src={BagIcon} alt="bagIcon" />
          </a>
        </div>
      </div>

      {/* Drop down */}

      <AnimatePresence>
        {onMenu && (
          <motion.div variants={navbarDropdownAnimation} initial="hidden" animate="visible" exit="exit" className={classes.mobileDrop}>
            <div className={classes.mobileDrop_header}>
              <div onClick={() => setOnMenu(false)} className={classes.mobileDrop_header_closeIcon}>
                <img src={closeIcon} alt="" />
              </div>
              <Link onClick={closeDrop} to={"/"} className={classes.mobileDrop_header_image_container}>
                <img alt="mepoAfLogo" src="https://res.cloudinary.com/mustnest/image/upload/v1669202813/Mepo_Af/main-logo-white_idnwm0.png" />
              </Link>
              <div className={classes.mobileDrop_header_right} />
            </div>
            <div className={classes.mobileDrop_body}>
              {langNavbarMobile[lang].map(({ name, path }) => (
                <Link onClick={name === "log in" || name === "Нэвтрэх" ? openLoginComp : closeDrop} key={name} to={path}>
                  {name}
                </Link>
              ))}
              <div className={classes.mobileDrop_body_langChange}>
                <button onClick={() => setLang("en")}>eng</button>
                <span>/</span>
                <button onClick={() => setLang("mn")}>мон</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
