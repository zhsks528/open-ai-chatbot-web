import { createGlobalStyle } from "styled-components";

export const CustomGlobalStyle = createGlobalStyle`


  :root {
    /* TNA 파트너센터 디자인 시스템 - */
    --palette-skyblue100: rgba(215, 233, 255, 1);
    --palette-skyblue30: rgba(215, 233, 255, 0.3);
    --palette-skyblue20: rgba(215, 233, 255, 0.2);
    --palette-skyblue5: rgba(215, 233, 255, 0.05);

    --palette-gray : rgba(246, 247, 247, 1); 
    --palette-graypurple: rgba(231, 228, 234, 1);

    --palette-gray40: rgba(182, 187, 193, 1);
    --palette-gray50: rgba(145, 153, 161, 1);
    
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  body {
    background: var(--color-white);
  }
`;
