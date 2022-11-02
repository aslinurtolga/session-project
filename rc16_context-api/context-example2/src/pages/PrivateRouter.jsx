import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { LoginContext } from "../context/LoginContext";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  // const user = true;

  //! Consuming
  // const { user } = useContext(LoginContext);
  const { user } = useLoginContext();

  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
