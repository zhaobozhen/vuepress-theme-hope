import { Component, Vue } from "vue-property-decorator";
import { PageInfotype } from "../types";
import AuthorInfo from "./AuthorInfo.vue";
import CategoryInfo from "./CategoryInfo.vue";
import ReadTimeInfo from "./ReadTimeInfo.vue";
import TagInfo from "./TagInfo.vue";
import TimeInfo from "./TimeInfo.vue";
import VisitorInfo from "./VisitorInfo.vue";
import WordInfo from "./WordInfo.vue";
import { commentOptions, pageInfoI18n } from "./define";

import "balloon-css";

@Component({
  components: {
    AuthorInfo,
    CategoryInfo,
    ReadTimeInfo,
    TagInfo,
    TimeInfo,
    VisitorInfo,
    WordInfo,
  },
})
export default class PageInfo extends Vue {
  private commentConfig = commentOptions;

  private get config(): PageInfotype[] | false {
    const themeConfig = this.$themeConfig.pageInfo;
    const pluginConfig = this.commentConfig.pageInfo;
    const pageConfig = this.$page.frontmatter.pageInfo as
      | false
      | PageInfotype[]
      | undefined;

    return pageConfig === false
      ? false
      : Array.isArray(pageConfig)
      ? pageConfig
      : pluginConfig === false
      ? false
      : Array.isArray(pluginConfig)
      ? pluginConfig
      : themeConfig === false
      ? false
      : Array.isArray(themeConfig)
      ? themeConfig
      : ["Author", "Visitor", "Time", "Category", "Tag", "ReadTime"];
  }

  private get iconPrefix(): string {
    const { iconPrefix } = this.$themeConfig;

    return iconPrefix === "" ? "" : iconPrefix || "icon-";
  }

  private get isOriginal(): boolean {
    return this.$frontmatter.original === true;
  }

  private get originText(): string {
    return pageInfoI18n[this.$localePath || "/"].origin;
  }
}
