/* eslint-disable @typescript-eslint/naming-convention */
import {
  i18n,
  lang2path,
} from "@mr-hope/vuepress-shared-utils/src/i18n/plugin";
import { resolve } from "path";

import { Context, PluginOptionAPI } from "@mr-hope/vuepress-types";
import { ComponentOptions } from "../types";

export = (options: ComponentOptions, context: Context): PluginOptionAPI => {
  const { themeConfig } = context;
  const baseLang = options.baseLang || themeConfig.baseLang || "en-US";
  const baseLangPath = lang2path(baseLang);
  const componentI18N = i18n.component;

  componentI18N["/"] = componentI18N[baseLangPath];

  return {
    name: "components",

    define: (): Record<string, unknown> => ({
      COMPONENT_I18N: componentI18N,
    }),

    enhanceAppFiles: resolve(__dirname, "../src/enhanceAppFile.js"),

    globalUIComponents: "BackToTop",
  };
};
