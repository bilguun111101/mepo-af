import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [limit, setLimit] = useState(1);
  const [lang, setLang] = useState("en");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [proDetail, setProDetail] = useState({});
  const [serverMsg, setServerMsg] = useState({});
  const [userDetail, setUserDetail] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [womenProducts, setWomenProducts] = useState([]);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isForPassOpen, setIsForPassOpen] = useState(false);

  const locale = localStorage.getItem("setLanguage");
  useEffect(() => {
    (() => {
      if (locale === "en") return setLang("en");
      return setLang("mn");
    })();
  }, [locale]);

  const state = {
    limit: { limit, setLimit },
    token: { token, setToken },
    language: { lang, setLang },
    loading: { loading, setLoading },
    msg: { serverMsg, setServerMsg },
    detail: { proDetail, setProDetail },
    user: { userDetail, setUserDetail },
    allPro: { allProducts, setAllProducts },
    menPro: { menProducts, setMenProducts },
    loginOpen: { isLoginOpen, setIsLoginOpen },
    womenPro: { womenProducts, setWomenProducts },
    signupOpen: { isSignupOpen, setIsSignupOpen },
    forPassOpen: { isForPassOpen, setIsForPassOpen },
  };
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};
