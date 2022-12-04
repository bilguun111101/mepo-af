import { useAuth } from "./API/useAuth";
import { useEffect, useContext } from "react";
import { Footer, Loading } from "./components";
import { AnimatePresence } from "framer-motion";
import { PageRender } from "./custom/PageRender";
import { Header } from "./components/layouts/Header";
import { PrivateRouter } from "./custom/PrivateRouter";
import { GlobalContext } from "./context/GlobalContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { Bag, Home, Login, Signup, Payment, ResetPassword, ForgotPassword } from "./pages";
import Account from "./pages/main/account";

const App = () => {
  const location = useLocation();
  const { refreshToken } = useAuth();
  const userLoggedIn = localStorage.getItem("UserLoggedIn");
  const {
    loading: { loading },
    loginOpen: { isLoginOpen },
    signupOpen: { isSignupOpen },
    forPassOpen: { isForPassOpen },
  } = useContext(GlobalContext);
  useEffect(() => {
    if (userLoggedIn) {
      refreshToken("/auth/refresh_token");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      <Header />
      <div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRouter />}>
              <Route path="/account" element={<Account />} />
              <Route path="/payment" element={<Payment />} />
            </Route>
            <Route path="/:page" element={<PageRender />} />
            <Route path="/:page/:id" element={<PageRender />} />
            <Route path="/reset_password/:token" element={<ResetPassword />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
      {isForPassOpen && <ForgotPassword />}
    </div>
  );
};

export default App;
