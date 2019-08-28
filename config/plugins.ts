import { IPlugin } from "umi-types";

const plugins: IPlugin[] = [
  [
    "umi-plugin-react",
    {
      antd: true,
      chunks: ["vendors", "umi"],
      dll: true,
      dva: false,
      dynamicImport: {
        level: 3,
        loadingComponent: "./components/dynamic-loading",
        webpackChunkName: true,
      },
      fastClick: true,
      library: "react",
      locale: {
        enable: true,
        default: "zh-CN",
        baseNavigator: true,
      },
      pwa: false,
      title: {
        defaultTitle: "mbms",
        format: "{current}{separator}{parent}",
        separator: " - ",
        useLocale: true,
      },
    },
  ],
];

export default plugins;
