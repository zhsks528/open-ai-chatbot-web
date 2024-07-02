import { createGlobalStyle } from "styled-components";

export const CustomGlobalStyle = createGlobalStyle`
  :root {
    --palette-purple100: rgba(119, 67, 238, 1);
    --palette-purple30: rgba(119, 67, 238, 0.3);
    --palette-purple20: rgba(119, 67, 238, 0.2);
    --palette-purple5: rgba(119, 67, 238, 0.05);

    /** 
    * chatbot - colors
    * - lightpurple: theme color(#FCFAFF)
    */
    --palette-lightpurple: rgba(252, 250, 255, 1);
    --palette-graypurple: rgba(231, 228, 234, 1);

    /* KDS - gray colors */
    --palette-gray0: rgba(225, 225, 225, 1);
    --palette-gray30: rgba(211, 215, 219, 1);
    --palette-gray40: rgba(182, 187, 193, 1);
    --palette-gray50: rgba(145, 153, 161, 1);
    --palette-gray60: rgba(116, 124, 134, 1);
    --palette-gray70: rgba(88, 95, 105, 1);
    --palette-gray80: rgba(64, 69, 78, 1);
    --palette-gray90: rgba(35, 38, 43, 1);
    --palette-gray100: rgba(0, 0, 0, 1);

    /* KDS - button colors */
    --palette-btn-line1: rgba(209, 214, 219, 1);
    --palette-btn-fill2: rgba(241, 243, 245, 1);
  }

  html {
    font-family: var(--font-pretendard), -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  body {
    background: var(--palette-lightpurple);
  }
`;
