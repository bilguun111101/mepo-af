import { motion } from "framer-motion";
import { useAuth } from "../../API/useAuth";
import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalContext";
import { formAnimation } from "../../utils/animationVariants";
import classes from "../../assets/styles/formStyles.module.scss";

export const ForgotPassword = () => {
  const { forgotPassword } = useAuth();
  const [userData, setUserData] = useState({ email: "" });
  const {
    language: { lang },
    user: { userDetail },
    loginOpen: { setIsLoginOpen },
    signupOpen: { setIsSignupOpen },
    msg: { serverMsg, setServerMsg },
    forPassOpen: { setIsForPassOpen },
  } = useContext(GlobalContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const closeForPassComp = () => {
    setServerMsg({});
    setIsForPassOpen(false);
  };
  const openSignupComp = () => {
    setServerMsg({});
    setIsSignupOpen(true);
    setIsForPassOpen(false);
  };
  const openLoginComp = () => {
    setIsLoginOpen(true);
    setIsForPassOpen(false);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    forgotPassword("/auth/forgot_password", userData);
  };

  return (
    <div className={classes.form}>
      <div className={classes.form_container}>
        <div onClick={closeForPassComp} className={classes.form_container_back} />
        <motion.div variants={formAnimation} initial="hidden" animate="visible" transition="transition" className={classes.form_container_main}>
          <AiOutlineClose onClick={closeForPassComp} className={classes.closeIcon} />
          <h1>{lang === "en" ? "Forgot password" : "Нууц үгээ мартсан"}</h1>
          <div>
            <span>{lang === "en" ? "Need an account?" : "Аккаунт хэрэгтэй юу?"}</span>
            <button onClick={openSignupComp}>{lang === "en" ? "Sign up" : "Бүртгүүлэх"}</button>
          </div>
          <form onSubmit={formSubmit}>
            <div className={classes.mailNumberBox}>
              <label htmlFor="mailOrNumber">{lang === "en" ? "Email or Phone number:" : "Имэйл эсвэл утасны дугаар:"}</label>
              <input
                type="text"
                name="email"
                id="mailOrNumber"
                placeholder={lang === "em" ? "Email..." : "Имэйл..."}
                onChange={handleChange}
                style={{
                  border: serverMsg.email ? "1px solid #C50C0C" : "none",
                }}
              />
              {serverMsg && <span className={classes.error}>{serverMsg.email?.[lang]}</span>}
            </div>
            <button type="submit" className={classes.submitBtn}>
              {lang === "en" ? "Send mail" : "Мэйл илгээх"}
            </button>
            {userDetail && <span className={classes.success}>{serverMsg.msg?.[lang]}</span>}
          </form>
          <button onClick={openLoginComp}>{lang === "en" ? "Login" : "Нэвтрэх"}</button>
        </motion.div>
      </div>
    </div>
  );
};
