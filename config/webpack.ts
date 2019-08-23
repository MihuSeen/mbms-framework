import { IAFWebpackConfig } from "umi-types/config";
import { IWebpackChainConfig } from "umi-types";

const chainWebpack = (
  config: IWebpackChainConfig,
  _: { webpack: IAFWebpackConfig },
): IWebpackChainConfig | void => {
  config.optimization.runtimeChunk(false).splitChunks({
    cacheGroups: {
      vendors: {
        name: "vendors",
        priority: 10,
        test: (module: { context: string }) => {
          return /[\\/]node_modules[\\/]/.test(module.context);
        },
      },
    },
    chunks: "all",
    maxInitialRequests: Infinity,
    minSize: 0,
  });
};

export default chainWebpack;
