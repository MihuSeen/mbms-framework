import React from "react";

import Style from "./style";

const Auth: React.FC = props => {
  const { children } = props;

  return (
    <div className={Style.background}>
      <div className={Style.container}>
        <div className={Style.banner} />
        <div className={Style.form}>{children}</div>
      </div>
    </div>
  );
};

export default Auth;
