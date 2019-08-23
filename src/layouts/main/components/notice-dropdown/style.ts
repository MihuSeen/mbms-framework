import { css } from "emotion";

export default {
  badge: css`
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
  `,
};
