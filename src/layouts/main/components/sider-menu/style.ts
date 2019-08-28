import { css } from "emotion";

export default {
  drawer: css`
    padding: 0;
    height: 100vh;
  `,

  sider: css`
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    position: fixed;
    overflow: "auto";
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  `,

  logo: css`
    height: 64px;
    display: block;
    cursor: pointer;
    overflow: hidden;
    line-height: 64px;
    position: relative;
    padding-left: 24px;
    box-shadow: 1px 1px 0 0 #e8e8e8;
  `,

  img: css`
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
  `,

  title: css`
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 0 12px;
    display: inline-block;
    vertical-align: middle;
  `,

  menu: css`
    width: 100%;
    padding: 16px 0;
  `,

  icon: css`
    width: 14px;
    vertical-align: baseline;
  `,
};
