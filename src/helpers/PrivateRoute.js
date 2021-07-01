import React from "react";

const PrivateRoute = ({ children, isAuthenticated }) => {
  if (isAuthenticated) {
    return { children };
  }
  return null;
};

export default PrivateRoute;
