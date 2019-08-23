import "normalize.css";
import React from "react";
import { RexProvider } from "@jimengio/rex";

import { globalStore } from "@/store";

import { ExRoute, ILocation, EAction } from "@/models/route";

// 修改传给路由组件的 props
export function modifyRouteProps(Props: Object, options: { route: ExRoute }) {
  return Props;
}

// 用于在初始加载和路由切换时做一些事情
export function onRouteChange(options: {
  location: ILocation;
  routes: ExRoute[];
  action: EAction;
}) {
  // bacon(location.pathname);
}

// 运行时修改路由
export function patchRoutes(routes: ExRoute[]) {
  // routes[0].unshift({
  //   path: "/foo",
  //   component: require("./routes/foo").default,
  // });
}

// 自定义 render，比如在 render 前做权限校验
export function render(oldRender: Function) {
  oldRender();
  //setTimeout(oldRender, 1000);
}

// 用于改写把整个应用 render 到 dom 树里的方法
export function rootContainer(container: React.ReactNode[]) {
  return React.createElement(RexProvider, { value: globalStore }, container);
}
