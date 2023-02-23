import { createStitches, type CSS } from "@stitches/react";

export const { styled, css, config } = createStitches({
  theme: {
    space: {
      smallest: "0.25rem",
      smaller: "0.5rem",
      small: "0.75rem",
      medium: "1rem",
      large: "1.25rem",
      larger: "1.5rem",
      largest: "2rem",
    },
  },
});

type ThemedCSS = CSS<typeof config>;
export { CSS as ThemeCSS };
