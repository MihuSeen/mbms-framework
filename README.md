# 中后台管理系统框架

## 开发工具

```bash
Visual Studio Code
```

## 推荐插件

```bash
EditorConfig

ESLint

Prettier (开启保存自动格式化)

TSLint

vscode-styled-components
```

## 包管理工具

```bash
yarn
```

## Run 项目

Dev

```bash
yarn dev
```

Build

```bash
yarn build
```

## 应用框架

[UmiJS](https://umijs.org)

## 技术栈

[TypeScript](https://www.typescriptlang.org)

[React Hooks](https://reactjs.org/docs/hooks-intro.html)

[Ant Design](https://ant.design)

[Emotion](https://emotion.sh)

[Rex](https://github.com/jimengio/rex)

[useImmer](https://github.com/immerjs/use-immer)

[Lodash](https://lodash.com)

[DAY.JS](https://github.com/iamkun/dayjs)

## 目录结构

```bash
.
└── config/
    ├── config.ts                  // Umi 配置
    ├── plugins.ts                 // Plugin 配置
    ├── routes.ts                  // Route 配置
    ├── theme.ts                   // Theme 配置
    ├── webpack.ts                 // Webpack 配置
├── dist                           // Build 目录
├── public                         // Favicon 资源
└── src/                           // 项目源码
    ├── apis                       // Api 请求
    ├── assets                     // 静态资源
    ├── components                 // 公共组件
        ├── component/             // 组件名
            ├── index.tsx          // 布局
            ├── style.ts           // 样式
    ├── controllers                // Store 控制器
    ├── layouts/                   // 全局布局
        ├── index.tsx              // 路由鉴权
        ├── layout/                // 一级路由名
            ├── components         // 组件
            ├── index.tsx          // 布局
            ├── style.ts           // 样式
    ├── locales                    // 多语言配置
        ├── zh-CN.ts               // 语言名称
        ├── zh-CN                  // 具体模块
    ├── models                     // 类型定义
    ├── pages/                     // 页面布局
        ├── .umi                   // Dev 临时目录
        ├── .umi-production        // Build 临时目录
        ├── page/                  // 页面名
            ├── components         // 组件
            ├── index.tsx          // 布局
            ├── style.ts           // 样式
    ├── styles                     // 公共样式
    ├── utils                      // 工具集
    ├── app.ts                     // 运行时配置
    ├── global.css                 // 全局样式
    ├── global.ts                  // 在入口文件前引用
    ├── store.ts                   // 全局 Store
    ├── typings.d.ts               // 导入文件类型描述
├── .env                           // 环境配置
├── README.md                      // 开发必读
```

## 路由配置

```TypeScript
interface ExRoute {
  icon?: string;                   // 侧边栏图标, 可设置为 Url
  name?: string;                   // 侧边栏和面包屑名称, 可配置多语言
  path?: string;                   // 路由路径, 可跳转至外部链接
  title?: string;                  // 网页标题, 可配置多语言
  Routes?: string[];               // 鉴权组件, 鉴定子路由渲染权限
  redirect?: string;               // 重定向, 值为存在的任一 Path
  component?: string;              // 全局布局或者页面布局组件
  routes?: ExRoute[];              // 子路由, 参数同父路由
  authority?: string[];            // 拥有渲染权限角色, 匹配任一即渲染
  hideInMenu?: boolean;            // 是否在侧边栏显示, fasle 也可访问
}
```

`auth` 路由下为登陆相关页面

`main` 路由下为主要页面, 其子路由仅可设置以下参数

```bash
icon name path title redirect component routes authority hideInMenu
```

且非一级路由不可设置 `icon` , 叶子路由才可设置 `title`

`hideInMenu: true` 情况下 `icon` 不可设置

`redirect` 仅可与 `path` 共存

## 命名规范

```bash

```

## Commit message 规范

格式(<>内为必需, []内为非必需):

```bash
<type>([scope]) <subject>
```

例如(注意空格):

```bash
Feat(component): 添加 XX 组件
Docs: 完善 README.md 文件
```

type: 类型

```bash
Feat: 新添加

Fix: BUG 修改

Refactor: 代码重构

Docs: 文档编辑

Style: 代码格式修改

Test: 添加测试用例

Chore: 其他修改
```

scope: 影响范围

```bash
api, component, layout, model 等
```

subject: 概述

## License

MIT
