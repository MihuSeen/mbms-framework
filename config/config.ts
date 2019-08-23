import { IConfig } from "umi-types";

import chainWebpack from "./webpack";
import plugins from "./plugins";
import routes from "./routes";
import theme from "./theme";

const config: IConfig = {
  chainWebpack,
  disableRedirectHoist: true,
  hash: true,
  ignoreMomentLocale: true,
  manifest: {
    basePath: "/",
  },
  plugins,
  routes,
  theme,
  treeShaking: true,
};

export default config;
