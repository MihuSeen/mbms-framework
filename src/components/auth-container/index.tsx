import React from "react";

import { Card } from "antd";

import Style from "./style";

interface IProps {
  title: string;
}

const AuthContainer: React.FC<IProps> = props => {
  const { title, children } = props;

  return (
    <Card
      className={Style.content}
      headStyle={{
        borderBottom: 0,
        textAlign: "center",
      }}
      title={
        <>
          <span className={Style.title}>{title}</span>
          <hr className={Style.line} />
        </>
      }
    >
      {children}
    </Card>
  );
};

export default AuthContainer;
