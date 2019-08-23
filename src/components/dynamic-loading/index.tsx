import React from "react";
import { Spin } from "antd";

import Style from "./style";

const DynamicLoading: React.FC = () => (
  <div className={Style.loading}>
    <Spin size="large" />
  </div>
);

export default DynamicLoading;
