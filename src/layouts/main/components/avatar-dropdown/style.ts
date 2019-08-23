import { css } from "emotion";

export default {
  avatar: css`
    margin: 18px 0;
    margin-right: 8px;
    vertical-align: top;
    background: rgba(255, 255, 255, 0.85);

    @media only screen and (max-width: 991px) {
      margin-right: 0;
    }
  `,

  name: css`
    @media only screen and (max-width: 991px) {
      display: none;
    }
  `,
};
