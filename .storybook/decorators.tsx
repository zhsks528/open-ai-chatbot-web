import React from "react";
import { GlobalStyle } from "@titicaca/core-elements";
import { createGlobalStyle } from "styled-components";
import { CustomGlobalStyle } from "../src/custom-global-styles";

const StorybookStyle = createGlobalStyle`
  body {
    background: white;
  }
`;

export function globalStyleDecorator(Story) {
  return (
    <>
      <GlobalStyle />
      <CustomGlobalStyle />
      <StorybookStyle />
      <Story />
    </>
  );
}
