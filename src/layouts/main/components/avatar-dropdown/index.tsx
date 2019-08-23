import React from "react";

import { Avatar, Menu, Icon } from "antd";
import HeaderDropdown from "../header-dropdown";

import lang from "@/utils/lang";

import Style from "./style";

const { Divider, Item } = Menu;

const AvatarDropdown: React.FC = () => {
  const avatarMenu = (
    <Menu selectedKeys={[]}>
      <Item key="center">
        <Icon type="user" />
        {lang("header.account")}
      </Item>
      <Item key="settings">
        <Icon type="setting" />
        {lang("header.settings")}
      </Item>
      <Divider />
      <Item key="logout">
        <Icon type="logout" />
        {lang("header.logout")}
      </Item>
    </Menu>
  );

  return (
    <HeaderDropdown overlay={avatarMenu}>
      <Avatar
        size={28}
        className={Style.avatar}
        src={
          "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        }
        alt="avatar"
      />
      <span className={Style.name}>name</span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
