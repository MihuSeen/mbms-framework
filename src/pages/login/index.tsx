import React from "react";
import { useImmer } from "use-immer";

import AuthContainer from "@/components/auth-container";

import Style from "./style";

const Login: React.FC = () => {
  return <AuthContainer title={"登陆"} />;
};

export default Login;
