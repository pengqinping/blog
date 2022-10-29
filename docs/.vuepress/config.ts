

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "AckKnowledge",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,

  shouldPrefetch: false,
});
