import { css } from "emotion";

export default {
  header: css`
    top: 0;
    right: 0;
    padding: 0;
    z-index: 2;
    position: fixed;
    background: #fff;
    transition: all 0.2s;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  `,

  logo: css`
    height: 64px;
    cursor: pointer;
    padding-left: 24px;
    vertical-align: top;
    display: inline-block;
  `,

  img: css`
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
  `,

  trigger: css`
    height: 64px;
    font-size: 20px;
    cursor: pointer;
    padding: 22px 24px;
    transition: all 0.2s;

    :hover {
      background: rgba(0, 0, 0, 0.025);
    }
  `,

  right: css`
    float: right;
    height: 100%;
    overflow: hidden;
    margin-right: 24px;
  `,
};
