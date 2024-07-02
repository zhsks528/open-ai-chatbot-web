import type { Preview } from "@storybook/react";

import { globalStyleDecorator } from "./decorators";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [globalStyleDecorator],
};

export default preview;
