import { css, keyframes } from "styled-components";

const blink = keyframes`
  from, to { background-color: transparent }
  50% {  background-color: var(--color-blue); }
`;

export const animation = css`
  &::after {
    position: absolute;
    right: -8px;
    content: "";
    width: 3px;
    height: 20px;
    animation: ${blink} 0.75s step-end infinite;
  }
`;
