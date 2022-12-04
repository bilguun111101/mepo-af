import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export const PrivateRouter = () => {
  const {
    token: { token },
  } = useContext(GlobalContext);
  return token ? <Outlet /> : <Navigate to={"/"} />;
};
