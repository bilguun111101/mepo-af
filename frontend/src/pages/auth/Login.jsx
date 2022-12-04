import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useAuth } from "../../API/useAuth";
import { GlobalContext } from "../../context/GlobalContext";
import { formAnimation } from "../../utils/animationVariants";
import classes from "../../assets/styles/formStyles.module.scss";
import { AiOutlineClose, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const Login = () => {
  const {
    language: { lang },
    user: { userDetail },
    loginOpen: { setIsLoginOpen },
    signupOpen: { setIsSignupOpen },
    msg: { serverMsg, setServerMsg },
    forPassOpen: { setIsForPassOpen },
  } = useContext(GlobalContext);
  const { login } = useAuth();
  const [passTypeChange, setPassTypeChange] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const typeChange = () => {
    setPassTypeChange(!passTypeChange);
  };
  const closeLoginComp = () => {
    setServerMsg({});
    setIsLoginOpen(false);
  };
  const openSignupComp = () => {
    setServerMsg({});
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };
  const openForPassComp = () => {
    setServerMsg({});
    setIsLoginOpen(false);
    setIsForPassOpen(true);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    login("/auth/login", userData);
  };

  return (
    <div className={classes.form}>
      <div className={classes.form_container}>
        <div onClick={closeLoginComp} className={classes.form_container_back} />
        <motion.div variants={formAnimation} initial="hidden" animate="visible" transition="transition" className={classes.form_container_main}>
          <AiOutlineClose onClick={closeLoginComp} className={classes.closeIcon} />
          <h1>{lang === "en" ? "Login" : "Нэвтрэх"}</h1>
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
            <div className={classes.passwordBox}>
              <label htmlFor="password">{lang === "en" ? "Password:" : "Нууц үг:"}</label>
              <div
                style={{
                  border: serverMsg.password ? "1px solid #C50C0C" : "none",
                }}
              >
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type={passTypeChange ? "text" : "password"}
                  placeholder={lang === "en" ? "Password:" : "Нууц үг:"}
                />
                <span onClick={typeChange}>{passTypeChange ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
              </div>
              {serverMsg && <span className={classes.error}>{serverMsg.password?.[lang]}</span>}
            </div>
            <button type="submit" className={classes.submitBtn}>
              {lang === "en" ? "Login" : "Нэвтрэх"}
            </button>
            {userDetail && <span className={classes.success}>{userDetail.msg?.[lang]}</span>}
          </form>
          <button onClick={openForPassComp}>{lang === "en" ? "Forgot password" : "Нууц үгээ мартсан"}</button>
        </motion.div>
      </div>
    </div>
  );
};
