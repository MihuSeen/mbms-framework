import React, { useEffect } from "react";
import { useImmer } from "use-immer";

import { useRexContext } from "@jimengio/rex";

import { Layout } from "antd";
import Media from "react-media";
import { ContainerQuery } from "react-container-query";

import { cx } from "emotion";

import SiderMenu from "./components/sider-menu";
import GlobalHeader from "./components/global-header";

import { updataMenuData } from "@/controllers/menu";

import { IGlobalStore } from "@/models/global";

import { getFlatMenuKeys } from "@/utils/menu";

import { ExRoute, ILocation } from "@/models/route";

import Style from "./style";

const { Content } = Layout;

interface IProps {
  route: ExRoute;
  location: ILocation;
}

interface IState {
  collapsed: boolean;
}

const screenQuery = {
  "screen-xs": {
    maxWidth: 575,
  },
  "screen-sm": {
    minWidth: 576,
    maxWidth: 767,
  },
  "screen-md": {
    minWidth: 768,
    maxWidth: 991,
  },
  "screen-lg": {
    minWidth: 992,
    maxWidth: 1199,
  },
  "screen-xl": {
    minWidth: 1200,
    maxWidth: 1599,
  },
  "screen-xxl": {
    minWidth: 1600,
  },
};

const mediaQuery = {
  maxWidth: 575,
};

const Main: React.FC<IProps> = props => {
  const {
    children,
    route: { routes },
    location: { pathname },
  } = props;

  const currentAuthority = useRexContext(
    (store: IGlobalStore) => store.authority,
  );

  const menuData = useRexContext((store: IGlobalStore) => store.menuData);

  const flatMenuKeys = getFlatMenuKeys(menuData);

  const [baseState, SetBaseState] = useImmer<IState>({ collapsed: false });

  useEffect(() => {
    updataMenuData(routes, currentAuthority);
  }, []);

  const setCollapsed = (value: boolean) => {
    SetBaseState(draft => {
      draft.collapsed = value;
    });
  };

  const getContentPaddingLeft = (isMobile: boolean) => {
    if (!isMobile) {
      return {
        paddingLeft: baseState.collapsed ? "80px" : "256px",
      };
    }
    return null;
  };

  return (
    <ContainerQuery query={screenQuery}>
      {screen => (
        <div className={cx(screen)}>
          <Layout>
            <Media query={mediaQuery}>
              {isMobile => (
                <>
                  <SiderMenu
                    menuData={menuData}
                    pathname={pathname}
                    isMobile={isMobile}
                    onCollapse={setCollapsed}
                    flatMenuKeys={flatMenuKeys}
                    collapsed={baseState.collapsed}
                  />
                  <Layout
                    style={{
                      ...getContentPaddingLeft(isMobile),
                    }}
                    className={Style.minHeight}
                  >
                    <GlobalHeader
                      isMobile={isMobile}
                      onCollapse={setCollapsed}
                      collapsed={baseState.collapsed}
                    />
                    <Content className={Style.content}>{children}</Content>
                  </Layout>
                </>
              )}
            </Media>
          </Layout>
        </div>
      )}
    </ContainerQuery>
  );
};

export default Main;
