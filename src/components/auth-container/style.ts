import { css } from "emotion";

export default {
  content: css`
    width: 80%;
  `,

  title: css`
    font-size: 24px;
    color: #075fb8;
  `,

  line: css`
    border: 0;
    width: 100%;
    height: 1px;
    margin: 16px 0 0 0;
    background: linear-gradient(
      63deg,
      rgba(7, 95, 184, 0) 0%,
      rgba(7, 95, 184, 1) 50%,
      rgba(7, 95, 184, 0) 100%
    );
  `,
};
