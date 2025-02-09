import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <h1 className="flex justify-center pt-40">{children}</h1>
    </div>
  );
};

export default AuthLayout;
