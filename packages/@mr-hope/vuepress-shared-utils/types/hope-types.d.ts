import {
  AlgoliaOption,
  DefaultThemeLangI18nConfig,
  NavBarConfigItem,
  SideBarConfigItemObject,
} from "@mr-hope/vuepress-types";
import { HopeLangI18nConfigItem } from "./i18n";

/** vuepress-theme-hope 导航栏配置项 */
export interface HopeNavBarConfigItem extends NavBarConfigItem {
  /** 导航栏对应项的图标 */
  icon?: string;
  /** 导航栏的路径前缀 */
  prefix?: string;
  /** 导航栏下拉列表子项 */
  items?: HopeNavBarConfigItem[];
}

/** vuepress-theme-hope 导航栏配置 */
export type HopeNavBarConfig = HopeNavBarConfigItem[] | false;

/** vuepress-theme-hope 侧边栏配置对象 */
export interface HopeSideBarConfigItemObject extends SideBarConfigItemObject {
  /** 分组的图标 */
  icon?: string;
  /** 当前分组的路径前缀 */
  prefix?: string;
  /** 当前侧边栏的子项 */
  children: HopeSideBarConfigItem[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [props: string]: any;
}

/** vuepress-theme-hope 侧边栏配置项 */
export type HopeSideBarConfigItem =
  | string
  | string[]
  | HopeSideBarConfigItemObject;

/** vuepress-theme-hope 侧边栏配置 */
export type HopeSideBarConfig =
  | HopeSideBarConfigItem[]
  | Record<string, HopeSideBarConfigItem[]>
  | "auto"
  | false;

/** vuepress-theme-hope 国际化配置 */
export type HopeLangI18nConfig = DefaultThemeLangI18nConfig &
  HopeLangI18nConfigItem;

/** vuepress-theme-hope 多语言配置 */
export interface HopeLangLocalesConfig
  extends DefaultThemeLangI18nConfig,
    Partial<HopeLangI18nConfigItem> {
  /** 导航栏链接 */
  nav?: HopeNavBarConfig;
  /** 侧边栏配置 */
  sidebar?: HopeSideBarConfig;
  /** 当前语言的 algolia 设置 */
  algolia?: AlgoliaOption;
  /** 时间轴文字 */
  timeline?: string;
}

/** 处理过的 vuepress-theme-hope 多语言配置 */
export interface ResolvedHopeLangLocalesConfig extends HopeLangI18nConfig {
  /** 导航栏链接 */
  nav: HopeNavBarConfig;
  /** 侧边栏配置 */
  sidebar: HopeSideBarConfig;
  /** 当前语言的 algolia 设置 */
  algolia?: AlgoliaOption;
}
