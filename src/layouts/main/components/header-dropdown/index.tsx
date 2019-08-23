import React from "react";
import { Dropdown } from "antd";

import Style from "./style";

type OverlayFunc = () => React.ReactNode;

interface IProps {
  overlay: React.ReactNode | OverlayFunc;
}

const HeaderDropdown: React.FC<IProps> = props => {
  const { children, overlay } = props;

  return (
    <Dropdown
      overlay={overlay}
      trigger={["hover"]}
      placement="bottomRight"
      overlayClassName={Style.container}
    >
      <span className={Style.action}>{children}</span>
    </Dropdown>
  );
};

export default HeaderDropdown;
