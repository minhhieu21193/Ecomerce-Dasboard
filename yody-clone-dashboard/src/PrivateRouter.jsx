import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  if (!userInfo || (userInfo && !userInfo.isAdmin)) {
    return <Navigate to={`/login`} />;
  } else return children;
}

export default PrivateRouter;
