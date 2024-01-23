import * as React from 'react';


const AuthLayout = ({ children }) => {
  return (
    <div className="Auth-container ">
      <div className="Auth-chilren-container">{children}</div>
    </div>
  );
};

export default AuthLayout;
