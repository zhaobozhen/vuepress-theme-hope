import { StickyMixin } from "@theme/util/articleMixin";
import { Component, Mixins } from "vue-property-decorator";
import { HopeLangI18nConfig } from "@mr-hope/vuepress-shared-utils";
import ArticleIcon from "@mr-hope/vuepress-shared-utils/icons/ArticleIcon.vue";
import ArticleList from "@theme/components/Blog/ArticleList.vue";
import CategoryIcon from "@mr-hope/vuepress-shared-utils/icons/CategoryIcon.vue";
import CategoryList from "@theme/components/Blog/CategoryList.vue";
import MyTransition from "@theme/components/MyTransition.vue";
import TagIcon from "@mr-hope/vuepress-shared-utils/icons/TagIcon.vue";
import TagList from "@theme/components/Blog/TagList.vue";
import TimeIcon from "@mr-hope/vuepress-shared-utils/icons/TimeIcon.vue";
import Timeline from "@theme/components/Blog/Timeline.vue";
import TimelineList from "@theme/components/Blog/TimelineList.vue";
import { filterArticle } from "@theme/util/article";

@Component({
  components: {
    ArticleIcon,
    ArticleList,
    CategoryIcon,
    CategoryList,
    MyTransition,
    TagIcon,
    TagList,
    TimeIcon,
    Timeline,
    TimelineList,
  },
})
export default class BlogInfo extends Mixins(StickyMixin) {
  private active = "category";

  private get i18n(): HopeLangI18nConfig["blog"] {
    return this.$themeLocaleConfig.blog || this.$themeConfig.locales["/"].blog;
  }

  private get articleNumber(): number {
    return filterArticle(this.$site.pages).length;
  }

  private setActive(name: string): void {
    this.active = name;
  }
}
