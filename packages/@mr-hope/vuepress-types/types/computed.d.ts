import { ResolvedHopeThemeConfig } from "vuepress-theme-hope";
import { I18nConfig } from "./config";
import { SiteData } from "./context";
import { Page, PageComputed, PageFrontmatter } from "./page";
import VueRouter, { Route } from "vue-router";
import { HopeLangI18nConfig } from "@mr-hope/vuepress-shared-utils";

declare module "vue/types/vue" {
  export interface Vue {
    $description: string;
    $frontmatter: PageFrontmatter;
    $lang: string;
    $localeConfig: {
      lang: string;
      path: string;
    };
    $localePath: string;
    $page: PageComputed;

    // context.getSiteData()
    $site: SiteData;
    $siteTitle: string;
    $themeConfig: ResolvedHopeThemeConfig;
    $themeLocaleConfig: I18nConfig & HopeLangI18nConfig;
    $title: string;

    // injected in client/app.js
    $withBase: (path: string) => string;

    // vue-router
    $router: VueRouter;
    $route: Route;
  }
}

export interface ClientComputedMixin {
  readonly $site: SiteData;
  readonly $themeConfig: ResolvedHopeThemeConfig;
  readonly $frontmatter: PageFrontmatter;
  readonly $localeConfig: I18nConfig;
  readonly $siteTitle: string;
  readonly $title: string;
  readonly $description: string;
  readonly $lang: string;
  readonly $localePath: string;
  readonly $themeLocaleConfig: string;
  readonly $page: Page;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  __page: Page;

  setPage: (page: Page) => void;
}
