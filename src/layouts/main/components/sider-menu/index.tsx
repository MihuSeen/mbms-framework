import React, { Suspense } from "react";

import Link from "umi/link";
import { Layout, Drawer } from "antd";

import lang from "@/utils/lang";

import { ExRoute } from "@/models/route";

import DynamicLoading from "@/components/dynamic-loading";
import BaseMenu from "./base-menu";

import logo from "@/assets/logo.svg";

import Style from "./style";

const { Sider } = Layout;

interface IProps {
  pathname: string;
  menuData: ExRoute[];
  isMobile: boolean;
  collapsed: boolean;
  flatMenuKeys: string[];
  onCollapse: (value: boolean) => void;
}

const SiderMenu: React.FC<IProps> = props => {
  const { isMobile, collapsed, onCollapse } = props;

  const MenuContent = (
    <Sider
      width={256}
      theme="light"
      trigger={null}
      breakpoint="lg"
      collapsible={true}
      className={Style.sider}
      collapsed={isMobile ? false : collapsed}
    >
      <Link to="/main" className={Style.logo}>
        <img className={Style.img} src={logo} alt="logo" />
        <h1 className={Style.title}>{lang("title.main")}</h1>
      </Link>
      <Suspense fallback={<DynamicLoading />}>
        <BaseMenu {...props} />
      </Suspense>
    </Sider>
  );

  return isMobile ? (
    <Drawer
      placement="left"
      closable={false}
      visible={!collapsed}
      className={Style.drawer}
      onClose={() => onCollapse(true)}
    >
      {MenuContent}
    </Drawer>
  ) : (
    MenuContent
  );
};

export default SiderMenu;
