import { css } from "emotion";

export default {
  container: css`
    @media screen and (max-width: 575px) {
      width: 100% !important;

      > * {
        border-radius: 0 !important;
      }
    }

    > * {
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    & .anticon {
      margin-right: 8px;
    }

    & .ant-dropdown-menu-item {
      min-width: 120px;
    }
  `,

  action: css`
    height: 100%;
    cursor: pointer;
    padding: 0 12px;
    line-height: 64px;
    transition: all 0.2s;
    vertical-align: top;
    display: inline-block;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    > i {
      vertical-align: middle;
      color: rgba(0, 0, 0, 0.65);
      font-size: 20px !important;
      transform: none !important;
    }

    svg {
      position: relative;
      top: -1px;
    }

    & .opened {
      background: rgba(0, 0, 0, 0.025);
    }
  `,
};
