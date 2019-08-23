import { css } from "emotion";

import background from "@/assets/banner-bg.png";

export default {
  background: css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      90deg,
      rgba(3, 114, 211, 1) 0%,
      rgba(7, 30, 146, 1) 100%
    );
  `,

  container: css`
    width: 100vw;
    height: 600px;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,

  banner: css`
    @media (max-width: 1333px) {
      display: none;
    }
    width: 575px;
    height: 100%;
    background: url(${background}) center no-repeat;
    background-size: contain;
  `,

  form: css`
    @media (max-width: 575px) {
      width: 90%;
    }
    height: 100%;
    width: 575px;
    border: #fff solid 1px;
  `,
};
