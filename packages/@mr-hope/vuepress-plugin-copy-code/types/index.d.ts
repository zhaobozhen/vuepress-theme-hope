import { CopyCodeI18NConfig } from "@mr-hope/vuepress-shared-utils";

export interface CopyCodeOptions {
  /**
   * 主目录所对应的语言。
   *
   * The language of the home directory.
   */
  baseLang?: string;
  /**
   * 代码块选择器
   *
   * Code block selector
   * 
   * @default [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ]
   */
  selector?: string | string[];
  /**
   * 提示消息显示时间
   *
   * Prompt message display time
   *
   * @default 300
   */
  duration?: number;
  /**
   * 是否展示在移动端
   *
   * Whether to display on the mobile side
   *
   * @default false
   */
  showInMobile?: boolean;
}

declare global {
  const CODE_COPY_OPIONS: Required<CopyCodeOptions>;
  const CODE_COPY_I18N: Record<string, CopyCodeI18NConfig>;
}
