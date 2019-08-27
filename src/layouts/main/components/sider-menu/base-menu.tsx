import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import Link from "umi/link";

import { getDefaultCollapsedSubMenus, getSelectedMenuKeys } from "@/utils/menu";
import { isUrl, conversionPath } from "@/utils/url";
import lang from "@/utils/lang";

import { ExRoute } from "@/models/route";

import { Menu, Icon } from "antd";

const { SubMenu, Item } = Menu;

import Style from "./style";

interface IProps {
  pathname: string;
  menuData: ExRoute[];
  isMobile: boolean;
  collapsed: boolean;
  flatMenuKeys: string[];
  onCollapse: (value: boolean) => void;
}

interface IState {
  openKeys?: string[];
}

const BaseMenu: React.FC<IProps> = props => {
  const {
    pathname,
    menuData,
    isMobile,
    collapsed,
    onCollapse,
    flatMenuKeys,
  } = props;

  const [state, setState] = useImmer<IState>({});

  useEffect(() => {
    setState(draft => {
      draft.openKeys = getDefaultCollapsedSubMenus(flatMenuKeys, pathname);
    });
  }, [flatMenuKeys]);

  const isMainMenu = (key: string) => {
    return menuData.some(item => {
      key ? item.path === key : false;
    });
  };

  const onOpenChange = (openKeys: string[]) => {
    const moreThanOne =
      openKeys.filter(openKey => isMainMenu(openKey)).length > 1;

    setState(draft => {
      draft.openKeys = moreThanOne ? [openKeys.pop()] : [...openKeys];
    });
  };

  let selectedKeys = getSelectedMenuKeys(flatMenuKeys, pathname);

  if (!selectedKeys.length && state.openKeys) {
    selectedKeys = [state.openKeys[state.openKeys.length - 1]];
  }

  let defaultProps = {};

  if (state.openKeys && !collapsed) {
    defaultProps = {
      openKeys:
        state.openKeys.length === 0 ? [...selectedKeys] : state.openKeys,
    };
  }

  const getNavMenuItems = (menuData: ExRoute[]) => {
    if (menuData == null || menuData.length == 0) {
      return [];
    }

    return menuData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => getSubMenuOrItem(item))
      .filter(item => item);
  };

  const getSubMenuOrItem = (item: ExRoute) => {
    if (
      item.children &&
      !item.hideChildrenInMenu &&
      item.children.some(child => child.name)
    ) {
      const name = lang(item.name as any);

      return (
        <SubMenu
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{name}</span>
              </span>
            ) : (
              <span>{name}</span>
            )
          }
          key={item.path}
        >
          {getNavMenuItems(item.children)}
        </SubMenu>
      );
    }

    return <Item key={item.path}>{getMenuItemPath(item)}</Item>;
  };

  const getIcon = (icon: string) => {
    if (typeof icon === "string") {
      if (isUrl(icon)) {
        return (
          <Icon
            component={() => (
              <img src={icon} className={Style.icon} alt="icon" />
            )}
          />
        );
      }

      return <Icon className={Style.icon} type={icon} />;
    }

    return icon;
  };

  const getMenuItemPath = (item: ExRoute) => {
    const itemPath = conversionPath(item.path);
    const name = lang(item.name as any);
    const icon = getIcon(item.icon);

    if (isUrl(itemPath)) {
      return (
        <a target="_blank" href={itemPath}>
          {icon}
          <span>{name}</span>
        </a>
      );
    }

    return (
      <Link
        to={itemPath}
        replace={itemPath === pathname}
        onClick={() => {
          isMobile && onCollapse(true);
        }}
      >
        {icon}
        <span>{name}</span>
      </Link>
    );
  };

  return (
    <Menu
      mode="inline"
      theme="light"
      {...defaultProps}
      className={Style.menu}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
    >
      {getNavMenuItems(menuData)}
    </Menu>
  );
};

export default BaseMenu;
