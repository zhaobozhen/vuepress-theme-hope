import { defineComponent } from "@vue/composition-api";
import MediaLinks from "@theme/components/MediaLinks.vue";
import { HopeFooterConfig } from "../types";

export default defineComponent({
  name: "PageFooter",

  components: { MediaLinks },

  computed: {
    footerConfig(): HopeFooterConfig {
      return this.$themeConfig.footer || {};
    },

    /** 显示页脚 */
    display(): boolean {
      const { copyright, footer, medialink } = this.$page.frontmatter;

      return (
        footer !== false &&
        Boolean(copyright || footer || medialink || this.footerConfig.display)
      );
    },

    /** 页脚内容 */
    footerContent(): string | false {
      const { footer } = this.$page.frontmatter;

      return footer === false
        ? false
        : typeof footer === "string"
        ? footer
        : this.footerConfig.content || "";
    },

    /** 版权信息 */
    copyright(): string | false {
      return this.$frontmatter.copyright === false
        ? false
        : (this.$frontmatter.copyright as string | undefined) ||
            this.footerConfig.copyright ||
            (this.$themeConfig.author
              ? `Copyright © 2020 ${this.$themeConfig.author}`
              : "");
    },
  },
});
