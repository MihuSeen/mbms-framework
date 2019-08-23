import React from "react";
import Link from "umi/link";

import { Layout, Icon } from "antd";

import NoticeDropdown from "../notice-dropdown";
import AvatarDropdown from "../avatar-dropdown";
import LangDropdown from "../lang-dropdown";

import Style from "./style";

import logo from "@/assets/logo.svg";

const { Header } = Layout;

interface IProps {
  isMobile: boolean;
  collapsed: boolean;
  onCollapse: (value: boolean) => void;
}

const GlobalHeader: React.FC<IProps> = props => {
  const { isMobile, collapsed, onCollapse } = props;

  const getHeadWidth = () => {
    if (isMobile) {
      return "100%";
    }
    return collapsed ? "calc(100% - 80px)" : "calc(100% - 256px)";
  };

  return (
    <Header style={{ width: getHeadWidth() }} className={Style.header}>
      {isMobile && (
        <>
          <Link to="/main" className={Style.logo}>
            <img className={Style.img} src={logo} alt="logo" />
          </Link>
        </>
      )}
      <span className={Style.trigger} onClick={() => onCollapse(!collapsed)}>
        <Icon type={collapsed ? "menu-unfold" : "menu-fold"} />
      </span>
      <div className={Style.right}>
        <NoticeDropdown />
        <AvatarDropdown />
        <LangDropdown />
      </div>
    </Header>
  );
};

export default GlobalHeader;
